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
    var scene = new THREE.Scene();
			// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var camera = new THREE.PerspectiveCamera( 75, THREE_WIDTH/THREE_HEIGHT, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			// renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.setSize( THREE_WIDTH, THREE_HEIGHT );
      // document.body.appendChild( renderer.domElement );
      var el = document.getElementById('three');
      el.appendChild( renderer.domElement);

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render( scene, camera );
			};

			animate();
  }
}
