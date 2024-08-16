import React from "react";   
import evolution from '../Assest/WhatsApp Image 2024-03-20 at 3.11.54 PM.jpeg'
export function Evolution(){
    return(
        <>
        <div>
            <h3 className="text-center mb-5"><b>Our Evolution </b></h3>
            {/* <img src={evolution} className="container-fluid"/> */}
                <img src={evolution} usemap="#image-map" className="container-fluid"/>

                <map name="image-map">
                    <area target="_blank" alt="" title="" href="https://www.kgworldwide.com/" coords="689,119,54" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgworldwide.com/" coords="800,321,54" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgworldwide.com/" coords="912,120,53" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgworldwide.com/" coords="1024,321,54" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kghospital.com/" coords="1128,120,56" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://kgcinemas.com/" coords="1234,321,55" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgisl.com/" coords="1436,321,55" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgchs.com/" coords="185,644,57" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kginvicta.com/" coords="289,852,55" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgisliim.ac.in/" coords="395,646,58" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kginvicta.com/" coords="494,853,60" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kghospital.com/" coords="617,644,56" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://www.kgkite.ac.in/" coords="744,852,58" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://microcollege.in/" coords="1090,908,105" shape="circle"/>
                    <area target="_blank" alt="" title="" href="https://kggeniuslabs.com/" coords="1391,589,105" shape="circle"/>
                </map>
        </div>
        </>
    );
}