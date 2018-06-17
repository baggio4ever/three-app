import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

const THREE_WIDTH = 320;
const THREE_HEIGHT = 240;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';

  ngOnInit() {
    const scene = new THREE.Scene();
		// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const camera = new THREE.PerspectiveCamera( 75, THREE_WIDTH/THREE_HEIGHT, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer();
		// renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( THREE_WIDTH, THREE_HEIGHT );
    // document.body.appendChild( renderer.domElement );
    const el = document.getElementById('three');
    el.appendChild( renderer.domElement);

		const geometry = new THREE.BoxGeometry( 1, 1, 1 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 2;

		const animate = function () {
			requestAnimationFrame( animate );

			cube.rotation.x += 0.1;
			cube.rotation.y += 0.1;

			renderer.render( scene, camera );
		};

		animate();
  }
}
