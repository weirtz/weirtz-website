import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor(private title: Title,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    //Set page at top
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0,0);
    }
    
    //Set title
    this.title.setTitle("Brendan Weirtz");
  
  
  
    //THREE JS
    let camera, controls, scene, renderer, effect;
    let model;
    const start = Date.now();
    let container = document.getElementById( 'three-main' );
    let dimensions = container.getBoundingClientRect();

    init();
    animate();

    function init() {

 




        camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.y = 0;
        camera.position.z = 4;
        camera.position.x = 0.6;

        scene = new THREE.Scene();

        const pointLight1 = new THREE.PointLight( 0xffffff, 42.4  );
        pointLight1.position.set( 20, 10, -10 );
        scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 4.4 );
        pointLight2.position.set( -2, 10, 10 );
        scene.add( pointLight2 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( dimensions.width, dimensions.height );
        
        effect = new AsciiEffect( renderer, ' "', { invert: true } );
        effect.setSize( dimensions.width, dimensions.height );
        effect.domElement.style.color = 'lightgrey';

        container.appendChild( effect.domElement );

        window.addEventListener( 'resize', onWindowResize );

        const loader = new GLTFLoader();

        loader.load( '/assets/models/about/weirtz3D.glb', function ( gltf ) {
        model = gltf.scene;
        model.scale.set(1,0.6,1);
        scene.add( model );

        }, undefined, function ( error ) {

        console.error( error );

        } );

    }

    function onWindowResize() {
        // camera.aspect = dimensions.width /dimensions.height;
        camera.updateProjectionMatrix();
        renderer.setSize( dimensions.width, dimensions.height );
        effect.setSize( dimensions.width, dimensions.height );
    }


    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        const timer = Date.now() - start;

        if(model) model.rotation.y = timer * -0.001;
        effect.render( scene, camera );
    }
    //END THREE JS
  }
}
