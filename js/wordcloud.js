//SETTINGS FOR D3
var width = document.body.clientWidth;
// var height = window.innerHeight - document.querySelector('header').clientHeight - 40;
var height = 500;
var typeFace = 'Lato';
var minFontSize = 22;
var colors = d3.scale.category20b();

function wordCloud(idtag) {
  //inisiasi svg
  var svg = d3.select("#" + idtag).append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');

  function drawCloud(words) {
    var vis = svg.selectAll('text').data(words);
    vis.enter().append('text')
      .style('font-size', function(d) {
        return d.size + 'px';
      })
      .style('font-family', function(d) {
        return d.font;
      })
      .style('fill', function(d, i) {
        return colors(i);
      })
      .attr('text-anchor', 'middle')
      .attr('transform', function(d) {
        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
      })
      .text(function(d) {
        return d.text;
      });
  }

  function calculateCloud(wordCount) {
    d3.layout.cloud()
      .size([width, height])
      .words(wordCount)
      .rotate(function() {
        return~~ (Math.random() * 2) * 90;
      })
      .font(typeFace)
      .fontSize(function(d) {
        var fsize = ((d.size / 5) < 1) ? 1 : (d.size / 5)
        return fsize * minFontSize;
      })
      .on('end', drawCloud)
      .start();
  }
  return {
    draw: function(wordCount) {
      calculateCloud(wordCount);
    }
  }
}