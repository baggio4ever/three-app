import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

const THREE_WIDTH = 960;
const THREE_HEIGHT = 540;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
		// this.creating_a_scene();
		// this.drawing_lines();
		// this.draw_cube();
		this.draw_shpere();
	}
	
	// Getting Started: Creating a scene
	// https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene
	creating_a_scene() {
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

	// Drawing Lines
	// https://threejs.org/docs/index.html#manual/introduction/Drawing-lines
	drawing_lines() {
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize( THREE_WIDTH, THREE_HEIGHT );
		const el = document.getElementById('three');
		el.appendChild( renderer.domElement );
		
		const camera = new THREE.PerspectiveCamera( 45, THREE_WIDTH / THREE_HEIGHT, 1, 500 );
		camera.position.set( 0, 0, 100 );
		camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
		
		const scene = new THREE.Scene();

		//create a blue LineBasicMaterial
		const material = new THREE.LineBasicMaterial( { color: 0x8888ff } );

		const geometry = new THREE.Geometry();
		geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
		geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
		geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

		const line = new THREE.Line( geometry, material );

		scene.add( line );

		const animate = function () {
			requestAnimationFrame( animate );

			line.rotation.z += 0.1;

			renderer.render( scene, camera );
		};

		animate();
		// renderer.render( scene, camera );
	}

	// https://ics.media/tutorial-three/quickstart.html
	draw_cube() {
		const renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize( THREE_WIDTH, THREE_HEIGHT );
		const el = document.getElementById('three');
		el.appendChild( renderer.domElement );
		
		// カメラを作成
		const camera = new THREE.PerspectiveCamera( 45, THREE_WIDTH / THREE_HEIGHT );
		camera.position.set( 0, 0, 1000 );
		//camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

		// シーンを作成
		const scene = new THREE.Scene();

		// 箱を作成
		const geometry = new THREE.BoxGeometry(400, 400, 400);
		const material = new THREE.MeshNormalMaterial();
		const box = new THREE.Mesh(geometry, material);
		scene.add(box);

		tick();

		// 毎フレーム時に実行されるループイベントです
		function tick() {
			box.rotation.y += 0.01;
			renderer.render(scene, camera); // レンダリング

			requestAnimationFrame(tick);
		}
	}

	// https://ics.media/tutorial-three/material_basic.html
	// http://planetpixelemporium.com/earth.html
	draw_shpere() {
		// レンダラーを作成
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize( THREE_WIDTH, THREE_HEIGHT );
		const el = document.getElementById('three');
		el.appendChild( renderer.domElement );


		// シーンを作成
		const scene = new THREE.Scene();
		
		// カメラを作成
		const camera = new THREE.PerspectiveCamera(45, THREE_WIDTH / THREE_HEIGHT, 1, 10000);
		camera.position.set(0, 0, +1000);
		
		// 球体を作成
		const geometry = new THREE.SphereGeometry(300, 30, 30);

		// 画像を読み込む
		const loader = new THREE.TextureLoader();
		const texture = loader.load('../assets/images/earthmap1k.jpg');
		// const texture = loader.load('../assets/images/earthlights1k.jpg');
		// マテリアルにテクスチャーを設定
		const material = new THREE.MeshStandardMaterial({
			map: texture
		});
/*
		// 単色
		const material = new THREE.MeshStandardMaterial({color: 0xFF0000});
*/
		  // メッシュを作成
		  const mesh = new THREE.Mesh(geometry, material);
		  // 3D空間にメッシュを追加
		  scene.add(mesh);
		
		  // 平行光源
		  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
		  directionalLight.position.set(1, 1, 1);
		  // シーンに追加
		  scene.add(directionalLight);
		
		  tick();
		
		  // 毎フレーム時に実行されるループイベントです
		  function tick() {
			// メッシュを回転させる
			mesh.rotation.y += 0.01;
			// レンダリング
			renderer.render(scene, camera);
		
			requestAnimationFrame(tick);
		  }
	}
}




// WebGL と JavaScript で学ぶ3D表現  Three.js入門サイト
// https://ics.media/tutorial-three/index.html


// Blender

// MacBookPro2017でBlender初心者が快適に使うためにやった設定一覧
// https://materializer.co/lab/blog/10