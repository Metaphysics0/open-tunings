<script lang="ts">
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { SVGuitarChord } from 'svguitar';

  function createTheChart(): void {
    if (!browser) return;
    const div = document.getElementById('chart') as HTMLElement;
    const chart = new SVGuitarChord(div);
    chart
      .configure({
        tuning: ['F', 'A', 'C', 'G', 'C', 'E']
      })
      .chord({
        fingers: [
          // finger at string 1, fret 2, with text '2'
          [1, 2, '2'],

          // finger at string 2, fret 3, with text '3', colored red and has class '.red'
          [2, 3, { text: '3', color: '#F00', className: 'red' }],

          // finger is triangle shaped
          // @ts-ignore
          [3, 3, { shape: 'triangle' }],
          [6, 'x']
        ],

        // optional: barres for barre chords
        barres: [
          {
            fromString: 5,
            toString: 1,
            fret: 1,
            text: '1',
            color: '#0F0',
            textColor: '#F00',
            className: 'my-barre-chord'
          }
        ],

        // title of the chart (optional)
        title: 'F# minor',

        // position (defaults to 1)
        position: 2
      })
      .draw();
  }

  onMount(async () => {
    createTheChart();
  });
</script>

<div id="chart" />

<style>
  #chart {
    max-width: 200px;
    max-height: 200px;
  }
</style>
