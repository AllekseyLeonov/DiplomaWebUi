import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';

interface HierarchyDatum {
  name: string;
  value: number;
  children?: Array<HierarchyDatum>;
}

const data: HierarchyDatum = {
  name: 'A1',
  value: 100,
  children: [
    {
      name: 'B1',
      value: 100,
      children: [
        {
          name: 'C1',
          value: 100,
          children: undefined
        },
        {
          name: 'C2',
          value: 300,
          children: [
            {
              name: 'D1',
              value: 100,
              children: undefined
            }
          ]
        },
        {
          name: 'C3',
          value: 200,
          children: undefined
        }
      ]
    },
    {
      name: 'B2',
      value: 200,
      children: [
        {
          name: 'C4',
          value: 100,
          children: undefined
        },
        {
          name: 'C5',
          value: 300,
          children: undefined
        },
        {
          name: 'C6',
          value: 200,
          children: [
            {
              name: 'D3',
              value: 100,
              children: undefined
            },
            {
              name: 'D4',
              value: 300,
              children: undefined
            }
          ]
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-skills-tree',
  templateUrl: './skills-tree.component.html',
  styleUrls: ['./skills-tree.component.css']
})
export class SkillsTreeComponent implements OnInit {
  @ViewChild('chart', {static: true}) private chartContainer!: ElementRef;

  root: any;
  tree: any;
  treeLayout: any;
  svg: any;

  treeData: any;

  height: number = 0;
  width: number = 0;
  margin: any = {top: 100, bottom: 100, left: 500, right: 500};
  duration = 500;
  nodeWidth = 3;
  nodeHeight = 3;
  horizontalSeparationBetweenNodes = 10;
  verticalSeparationBetweenNodes = 3;
  nodes: any[] = [];
  links: any;
  countOfLevels : number = 4;

  constructor() {
  }

  ngOnInit() {
    this.renderTreeChart();
  }

  renderTreeChart() {
    const element: any = this.chartContainer.nativeElement;
    this.margin.left = element.offsetWidth/2;
    this.margin.right = element.offsetWidth/2;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', this.countOfLevels*180)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.tree = d3.tree()
      .size([this.height, this.width])
      .nodeSize([this.nodeWidth + this.horizontalSeparationBetweenNodes, this.nodeHeight + this.verticalSeparationBetweenNodes])
      .separation((a, b) => a.parent == b.parent ? 10 : 5);

    this.root = d3.hierarchy(data, (d) => d.children);
    this.root.x0 = this.height / 2;
    this.root.y0 = 10;

    this.updateChart(this.root);
  }

  // @ts-ignore
  click = (d) => {
    console.log('click', d);
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }

    this.updateChart(d);
  }

  // @ts-ignore
  updateChart(source) {
    let i = 0;
    console.log('update', source);
    this.treeData = this.tree(this.root);
    this.nodes = this.treeData.descendants();
    this.links = this.treeData.descendants().slice(1);
    // @ts-ignore
    this.nodes.forEach((d) => {
      d.y = d.depth * 180;
    });

    const node = this.svg.selectAll('g.node')
      .data(this.nodes, (d: { id: number; }) => d.id || (d.id = ++i));

    const nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr('transform', () => {
        return 'translate(' + source.x0 + ',' + source.y0 + ')';
      })
      .on('click', this.click);

    nodeEnter.append('rect')
      .attr('class', 'node')
      .attr('x', 10)
      .attr('y', 10)
      .attr('height', 20)
      .attr('width', 20)
      .style('fill', (d: { _children: any; }) => {
        return d._children ? 'lightsteelblue' : '#fff';
      });

    nodeEnter.append('text')
      .attr('dx', '0.5em')
      .attr('y', (d: { children: any; _children: any; }) => {
        return d.children || d._children ? -20 : 20;
      })
      .attr('text-anchor', (d: { children: any; _children: any; }) => {
        return d.children || d._children ? 'end' : 'start';
      })
      .style('font', '12px sans-serif')
      .style('font-weight', 'bold')
      .text((d: { data: { name: any; }; }) => d.data.name);

    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
      .duration(this.duration)
      .attr('transform', (d: { y: string; x: string; }) => {
        return 'translate(' + d.x + ',' + d.y + ')';
      });

    nodeUpdate.select('rect.node')
      .attr('x', -10)
      .attr('y', -10)
      .attr('height', 20)
      .attr('width', 20)
      .attr('transform', 'rotate(45)')
      .style('stroke-width', '3px')
      .style('stroke', 'steelblue')
      .style('fill', (d: { _children: any; }) => {
        return d._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    const nodeExit = node.exit().transition()
      .duration(this.duration)
      .attr('transform', () => {
        return 'translate(' + source.x + ',' + source.y + ')';
      })
      .remove();

    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    const link = this.svg.selectAll('path.link')
      .data(this.links, (d: { id: any; }) => d.id);

    const linkEnter = link.enter().insert('path', 'g')
      .attr('class', 'link')
      .style('fill', 'none')
      .style('stroke', '#ccc')
      .style('stroke-width', '2px')
      .attr('d', function () {
        const o = {y: source.y0, x: source.x0};
        return diagonal(o, o);
      });

    const linkUpdate = linkEnter.merge(link);

    linkUpdate.transition()
      .duration(this.duration)
      .attr('d', (d: { parent: any; }) => diagonal(d, d.parent));

    const linkExit = link.exit().transition()
      .duration(this.duration)
      .attr('d', function () {
        const o = {x: source.x, y: source.y};
        return diagonal(o, o);
      })
      .remove();

    // @ts-ignore
    this.nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    function diagonal(s: { x?: any; y?: any; parent?: any; }, d: { x: any; y: any; }) {
      const path = `M ${s.x} ${s.y}` +
        `Q ${s.x} ${s.y},` +
        `${d.x} ${d.y}`;
      return path;
    }
  }
}
