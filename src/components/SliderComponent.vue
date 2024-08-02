<template>
    <div class="slider">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="slide">
                <div class="slide-content" :style="{ backgroundImage: `url(${require('@/assets/img/'+slide.image+'')})` }">
                    <h3>{{ slide.h3 }}</h3>
                    <h2>{{ slide.h2 }}</h2>
                    <p>{{ slide.text }}</p>
                    <button @click="onButtonClick(slide.buttonLink)">{{ slide.buttonText }}</button>
                </div>
            </div>
        </div>
        <button @click="prevSlide" class="nav prev"><i class="fa-solid fa-chevron-left"></i></button>
        <button @click="nextSlide" class="nav next"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        slides: [
          {
            h3: 'Learning Just Got',
            h2: 'Interesting!',
            text: 'Say NO to boring courses and enroll yourself in these engaging, convenient and fun in-demand courses!',
            buttonText: 'Learn on-the-go',
            image: 'banenr-1.jpg',
            buttonLink: 'https://github.com'
          },
          {
            h3: 'Learning Just Got',
            h2: 'Interesting!',
            text: 'Say NO to boring courses and enroll yourself in these engaging, convenient and fun in-demand courses!',
            buttonText: 'Learn on-the-go',
            image: 'banner2.jpg',
            buttonLink: 'https://github.com'
          },
          {
            h3: 'Learning Just Got',
            h2: 'Interesting!',
            text: 'Say NO to boring courses and enroll yourself in these engaging, convenient and fun in-demand courses!',
            buttonText: 'Learn on-the-go',
            image: 'banner3.jpg',
            buttonLink: 'https://github.com'
          }
        ]
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
      },
      onButtonClick(link) {
        window.location.replace(link);
      }
    }
  };
  </script>
  
  <style scoped>
  @import '@fortawesome/fontawesome-free/css/all.css';
  
  .slider {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  .slide {
    min-width: 100%;
    box-sizing: border-box;
    padding: 0px;
    background-color: #f0f0f0;
  }
  .slide-content {
    text-align: center;
    padding: 10% 5%;
    background-size: cover;
    background-position: center;
    color: white;
  }
  .slide-content h3, .slide-content h2 {
    margin: 10px 0;
    font-weight: 900 !important;
  }
  .slide-content h3 {
    font-size: 30px;
  }
  .slide-content h2 {
    font-size: 60px;
  }
  .slide-content p {
    margin: 20px 0;
    font-size: 20px;
  }
  .slide-content button {
    padding: 20px 20px;
    background-color: #000;
    color: white;
    font-size: 17px;
    border-radius: 35px;
    border: none;
    font-weight: 700 !important;
    cursor: pointer;
    text-transform: uppercase;
  }
  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: white;
    border: 2px solid #fff;
    padding: 13px 18px;
    font-size: 18px;
    border-radius: 60px;
    cursor: pointer;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }
  </style>
  