import './css/About.css'

function About(){
    return (
        <div id="content">
            <section class ="about columns">
                <div class="about-img">
                    <img src="images/me.jpg"/>
                </div>
                <div>
                    <h3>About Me</h3>
                    <p class="about-p">Hi, I'm Audrey! I'm a CIS student at the University of South Carolina, and (more importantly) an avid
                        trinket collector. My favorite trinkets to collect are blind boxes and keychains, but I'll add basically any
                        trinket which piques my interest to my collection. Can this be considered borderline hoarding? Probably! But
                        it makes me happy and that's all that matters, right?
                    </p>
                </div>
            </section>
                    <section class ="about columns">
                        <div>
                            <h3>About the Database</h3>
                            <p class="about-p">Like the name suggests, this database is a place for me to digitally log all of my trinkets. Now, you may be asking yourself 
                                "what exactly <i>is</i> a trinket?" The dictionary defines a trinket as a "small ornament or item of jewelry that is of little value".
                                However, I personally define a trinket as any item which is of little value to <i>most</i> people, but provides me with
                                great enjoyment from its presence. So, come take a look at all of my favorite trinkets, and maybe you'll get enjoyment from one of them, too!
                            </p>
                        </div>
                        <div class="about-img">
                            <img src="images/trinketdisplay.jpg"/>
                        </div>
                    </section>
                    <section class="iframe columns">
                        <div>
                            <h3>"But...Why?"</h3>
                            <p class = "about-p">Believe it or not, my compulsion to horde items which make me happy is a natural part of human nature,
                                and probably something that you experience yourself in some capacity! Here's an interesting video that covers this topic
                                in more detail:
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/JPqhiZpp1Sw?si=cdyPIDZDBg1vgxEj" 
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </p>
                        </div>
                    </section>
        </div>
    );
};

export default About;