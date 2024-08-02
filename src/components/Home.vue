<template>
    <h1>home page</h1>
    <div class="homepage">
        <SliderComponent />
        <!-- <section class="sec-1">
            <h2>Learning Just Got</h2>
            <h1>Interesting</h1>
            <p>Say NO to boring courses. Enroll in our highly engaging in-demand courses.</p>
        </section> -->
        <section class="sec-2">
            <h2>Popular Courses</h2>
            <div class="course-row">
                <div class="boxes" >
                    <img src="../assets/img/SVG-for-WEB-02.svg" alt="">
                    <h4>ITIL®4 Foundation</h4>
                    <p>Add the world’s most recognized IT service management certification to your list of credentials.</p>
                    <button class="btn">Enroll Now</button>
                </div>
                <div class="boxes">
                    <img src="../assets/img/COBIT-4-02.svg" alt="">
                    <h4>COBIT® Foundation </h4>
                    <p>Get the best guidance towards becoming COBIT® certified and add a valuable certification to your credentials.</p>
                    <button class="btn">Enroll Now</button>
                </div>
                <div class="boxes">
                    <img src="../assets/img/cscs-01-1.svg" alt="">
                    <h4>PRINCE2® Foundation</h4>
                    <p>Learn a business-driven approach to project management with this accredited certification.</p>
                    <button class="btn">Enroll Now</button>
                </div>
                <div class="boxes">
                    <img src="../assets/img/LOGO_DevOps.svg" alt="">
                    <h4>DevOps Fundamentals</h4>
                    <p>Gain practical guidance on establishing a strong career in DevOps from certified industry experts.</p>
                    <button class="btn">Enroll Now</button>
                </div>
            </div>
        </section>
        <textAndImage
            heading="Corporate Training"
            text="Train your teams with our experienced and accredited trainers. Avail standard and tailored training courses at your preferred time and location. Enhance the morale and productivity of your team while simultaneously being cost-effective."
            btnTxt="Train Your Team"
            imageUrl="team.jpg"
        />
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    components: {
        SliderComponent,
        textAndImage
    }
}

import SliderComponent from './SliderComponent.vue';
import textAndImage from './textAndImage.vue';
</script>