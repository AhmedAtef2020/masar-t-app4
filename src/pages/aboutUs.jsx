import ServiceComp from "../components/ServiceComp"

export default function aboutUs() {
    return (
        <div className="aboutPage">
            <img src="./images/AboutUs-Img.jpg" className="py-4 w-100" />
            <div className="container d-flex justify-content-between align-items-start flex-wrap">
                <h3 className="col-2 mt-2 c-darkOrange" >من نحن؟</h3>
                <div className="col mt-5">
                    <p className="col pe-5 lh-lg">مجموعة رائعة من ذَوِي الخبرة في شتَّى المجالات الفنية، تعشق الجَمالَ، وترعى تنفيذَه؛ لتُحقِّق عَمَلًا فنيًّا رائعًا في شتَّى مجالات الدعاية والإعلان، المطبوع منها والإلكتروني، وحتَّى تُقدِّم خدمات إعلانية رائعة، تُلبِّي احتياجاتك الفنية المختلفة، بشكل مميَّز، تجعل بين يديك أداة رائعة لتنفيذ كل هذه الخدمات في مكان واحد، وبسهولة وبساطة ودقة، لن تجدها مجتمعةً في مكان واحد، هنا تنتظرك تجربةٌ رائعةٌ؛ لتحويل أفكارِكَ الإبداعية إلى واقع، في «مَسَار» سنُقدِّم لكَ حلًّا فريدًا لتحويل الخيال إلى واقع حقيقي بين يديكَ، نَعِدُكَ بأن تكون تجربتك الأولى شيِّقة مُمتِعة، وأنها لن تكون الأخيرة بإذن الله تعالى.</p>
                </div>
                <img src="./images/masar-logo-about.jpg" className="col-3 m-auto" />
            </div>

        </div>
    );
};
