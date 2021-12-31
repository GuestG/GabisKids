

var dataReload = document.querySelectorAll("[data-reload]");
var spanishChoice = document.getElementById("spanish");
var englishChoice = document.getElementById("english");

var language = {
    eng: {
        welcome: "Welcome to Gabi's Kids!",
        explaination: "Let us help you.",
        projects: "programs",
        about: "about",
        contact: "contact",
        donate: "donate",

        kidslogoDesc: `Gabi's kids is a charity run by the folks at
        Olympic Cards and Comics! Gabi's Kids provides services
        such as foods and school supplies for struggling people
        thoughout the entire year! We also Work with other charities
        in the Thurston county area to offer various services. It's
        100% donation funded, we will gladly accept any and all items to aid those
        who are less forunate.`,
        gabisKidsSubTitle: "Providing services for kids and vulnerable folks during the shelter in place.",

        projectHeadTitle: "programs",
        stats1: `In Washington, 790,050 people are facing hunger and of them 230,440 are children.`,
        stats2:`According to the 2015 - 2019 American Community Survey 5 - year estimates, 
                10.4% of Thurston County's population (28,660 people) lived below the federal poverty level.`,  
        statsFrom: "- According to FeedingAmerica & Thurston Regional.",
        adoptTitle: "adopt-a-family",
        suppliesTitle: "School Supplies",
        foodDriveTitle: "Food Drives",

        adoptDesc: `Our Adopt-A-Family program makes memories for familes during
        the holiday season. We match supporters with familes, who provide
        clothing, toys and other supplies for the familes we partner with.
        We've had over 500 families adopted to date!`,
        suppliesDesc: `No kid should go without the basics, we can provide assistance 
        in school supplies. These range from pencils, pens, notebooks and more! We 
        are always accepting school supplies from generous patrons throughout the year!`,
        foodDriveDesc: `Hunger affects every community, but many don't realize it. Gabi's kids aids those who are
        food insecure. Teaming up with Thurston County Food Bank and All Kids Win, in order to
        provide food programs throughout the year.`,

        aboutUsDesc: `Gabi is the owner of Olympic Cards and Comics, and founder of Gabi's Kids.
        Throughout Gabi's life, people have stepped up to aid her in during her times of adversity.
        The generosity and kindness others have showed her, lead to Gabi reciporcate these feelings.
        Realizing people in her community were suffering from even the most basic of needs. Gabi took action
        and created Gabi's Kids in order to aid those who are struggling, not only with food and other supplies,
        but with compassion and generosity like she had received.`,
        aboutDescFace:"Follow Gabi's Kids on Facebook to see what events are up and coming!",
        gabisTitle: "about Gabi",
        hours: "Hours",
        mon: "Mon - Tue: 10 am - 1 pm",
        weds: "Weds - Sat: 6 pm - 9 pm",
        sun: "Sun: Closed",
        contactUs: "contact us",
        contactUsSub: "Give us a call or find us!",
        name: "Your Name *",
        email: "Your Email *",
        message: "Your message *",
        sendMessage: "Send Message",
        phone: "phone",
        address: "address"

    },
    es: {
        welcome: "Bienvenidos a Gabi's Kids!",
        explaination: "permítanos ayudarle.",
        projects: "programas",
        about: "quiénes somos",
        contact: "contacto",
        donate: "donar",

        kidslogoDesc: `Gabi's Kids es una organization benéfica dirigida por personas de Olympic Cards and Comics! 
                        Gabi's Kids donde se proporcionan servicios como alimentos y útiles escolares para personas que
                        luchan durante el año! Nosotros también trabajamos con otras organizaciones benéficas en el área
                        como Thuston County donde ofrecen varios servicios. El 100% de está fondación es por donaciones,
                        con mucho guesto aceptamos walguier artículo que ayudará aquellos que son menos a torunados. no tengam acceso a los
                        alimentos ó utiles escolares.`,
        gabisKidsSubTitle: "Proporcionar servicios para niños y personas vulnerables durante el refugio en el lugar.",

        projectHeadTitle: "programas",
        stats1: `En Washington 790,050 personas se enfrentam al hambre y de ellos 230,440 son niños.`,
        stats2: `De acuerdo con American Community Survey por cinco años desde el 
        2015 - 2019 se han estimado, 10.4% de la populacion de Thurston county (28,660 persona)
        viven debajo del nivel federal de pobreza.`,
        statsFrom: "- según Feeding America y Thurston Regional Planning Council.",
        adoptTitle: "adoptar-una-familia",
        suppliesTitle: "Utiles de Escuela",
        foodDriveTitle: "la colecta de alimentos",

        adoptDesc: `Nuestro programa de Adopt-A-Family crea recuerdos para las familias durante
        las fiestas de temporada. Nosotros emparejamos las donaciones con las familias que nos
        apoyan, los que propoiciona, ayudan con ropa, juguetes y otros articulos para las familias
        que nosasociamos. Hemos tenido más de 500 familias adoptadas hasta la fecha!`,
        suppliesDesc: `Ningún niño deberia prescindir de lo básico, nosotros podemos brindar 
                        asistencia en los utiles para la escuela. Estos van desde lapices, 
                        boligrafos, cuadernos y mucho más! Nosotros siempre estamas aceptando utiles
                        de escuela de proveedores generosos a lo largo del año!`,
        foodDriveDesc: `El hambre afecta a todas las communidades, pero mucho no se dan cuenta. Gabi's Kids
                        ayuda a quienes parecen de insequridad alimentaria. trahajando en equipo con Thurston 
                        County Food Bank, All Kids Win, con el fin debrindar programas a lo largo del año.`,

        aboutUsDesc: "",
        aboutDescFace: "¡Sigue a Gabi's Kids en Facebook para ver qué eventos están por venir!",
        gabisTitle: "quiénes somos",
        hours: "Horas",
        mon: "Lun - Mar: 10 am - 1 pm",
        weds: "Mié - Sáb: 6 pm - 9 pm",
        sun: "Dom: cerrado",
        contactUs: "contáctenos",
        contactUsSub: "¡Llámanos o encuéntrenos!",
        name: "Tu Nombre *",
        email: "Tu Email *",
        message: "Tu Mesaje *",
        sendMessage: "enviar mensaje",
        phone: "Teléfono",
        address: "dirección"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#es") {
        intro.textContent = language.es.welcome;

        explain.textContent = language.es.explaination;

        navbarProjects.textContent = language.es.projects;

        navbarAbout.textContent = language.es.about;

        navbarContact.textContent = language.es.contact;

        donateButton.textContent = language.es.donate;

        gabisKidsSub.textContent = language.es.gabisKidsSubTitle;


        gabisKidslogoDesc.textContent = language.es.kidslogoDesc;

        statsDesc1.textContent = language.es.stats1;

        statsDesc2.textContent = language.es.stats2;

        statsfrom.textContent = language.es.statsFrom;
        
        adoptAFamilyTitle.textContent = language.es.adoptTitle;
        schoolTitle.textContent = language.es.suppliesTitle;
        foodTitle.textContent = language.es.foodDriveTitle;

        adoptAFamilyDesc.textContent = language.es.adoptDesc;
        schoolDesc.textContent = language.es.suppliesDesc;
        foodDesc.textContent = language.es.foodDriveDesc;

        // aboutDesc.textContent = language.es.aboutUsDesc;

        aboutDescFacebook.textContent = language.es.aboutDescFace;
        projectHeadingTitle.textContent = language.es.projectHeadTitle;

        aboutGabisTitle.textContent = language.es.gabisTitle;

        aboutHours.textContent = language.es.hours;

        aboutMon.textContent = language.es.mon;

        aboutWeds.textContent = language.es.weds;

        aboutSun.textContent = language.es.sun;

        contactUsTitle.textContent = language.es.contactUs;

        contactUsSubTitle.textContent = language.es.contactUsSub;

        nametext.placeholder = language.es.name;

        email.placeholder = language.es.email;

        message.placeholder = language.es.message;

        submit.textContent = language.es.sendMessage;

        phoneText.textContent = language.es.phone;

        addressText.textContent = language.es.address;

        spanishChoice.setAttribute('style','display: none;');

        englishChoice.setAttribute('style','display: block;');
    }

}

for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        setTimeout(function () {
            location.reload(true);
        }, 150) // adjust the timer that works for you (1000 = 1 second)
    }
}

