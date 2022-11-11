import React from 'react';
import {Link} from "react-router-dom";
import photoProfile from "../../../assests/img/photo-profile.jpg";
import photoGallery1 from "../../../assests/img/photo-gallery-1.jpg"
import photoGallery2 from "../../../assests/img/photo-gallery-2.jpg"
import photoGallery3 from "../../../assests/img/photo-gallery-3.jpg"
import photoGallery4 from "../../../assests/img/photo-gallery-4.jpg"
import photoGallery5 from "../../../assests/img/photo-gallery-5.jpg"
import photoGallery6 from "../../../assests/img/photo-gallery-6.jpg"
import photoBg from "../../../assests/img/photo-bg.jpg"
const Photograph = () => {
    return (
        <main>
            <div className="banner">
                <img src={photoBg} alt=""/>

                <div className="author">
                    <Link to="/">
                        <h1>Elena Morell</h1>
                        <h3>Photographer</h3>
                    </Link>
                </div>
            </div>
            <div className="story">
                <div className="story-description">
                    <h3>My Story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae blanditiis delectus hic id
                        maiores modi, voluptas. Aspernatur autem cupiditate dolorem expedita id illo laudantium modi nostrum
                        quos soluta. Accusantium esse iusto, maiores minus recusandae saepe ullam. Ad cum earum modi quae
                        quaerat quis recusandae voluptate! Accusamus accusantium dignissimos dolorem esse eveniet ipsam itaque,
                        laborum, natus officia quas quis similique suscipit! Beatae, deserunt eum incidunt nulla officiis optio
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolore dolores doloribus error ex expedita
                        harum hic ipsa itaque iure magnam magni molestias neque nesciunt nihil obcaecati officia quas quod
                        repellat repudiandae, sapiente sed sunt vel? Aliquam autem corporis deleniti enim ipsam laudantium minus
                        nobis quia, rem sunt. Animi, dicta dolore esse est ipsum nemo officiis optio possimus qui tempora!</p>
                </div>
                <div className="profile">
                    <img className="model-left" src={photoProfile} alt=""/>
                </div>
            </div>
            <div className="my-work">
                <div className="work-description">
                    <h3>My Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci amet
                        asperiores
                        consequuntur deleniti distinctio ducimus earum eius esse est expedita id illo inventore ipsam
                        magni
                        maxime modi molestiae mollitia necessitatibus nulla odio placeat saepe similique unde, veniam. A
                        accusantium adipisci assumenda commodi cumque delectus dolor dolorem ducimus earum fugit in
                        inventore
                        iste laboriosam laudantium magnam maiores molestias necessitatibus nihil nobis optio quae quod,
                        ratione
                        similique. Dignissimos, tempore.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse fugit possimus quaerat
                        quo
                        reiciendis repellat tempora vero? Fuga, totam!</p>
                </div>
                <div className="work-gallery">
                    <img src={photoGallery1} alt=""/>
                    <img src={photoGallery2} alt=""/>
                    <img src={photoGallery3} alt=""/>
                    <img src={photoGallery4} alt=""/>
                    <img src={photoGallery5} alt=""/>
                    <img src={photoGallery6} alt=""/>
                </div>
            </div>
        </main>
    );
};

export default Photograph;