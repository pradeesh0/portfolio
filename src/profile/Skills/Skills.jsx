import React from 'react';
import "./Skills.css";
const skills = [
    {
      title: "Frontend",
      skills: [
          {
              name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "JavaScript",
          image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
            name: "Bootstrap",
            image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
       /* {
          name: "Next Js",
          image:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
        },*/
    ],
},
{
      title: "Backend",
      skills: [
        {
          name: "c programming",
          image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png",
        },
        
        {
          name: "C++",
          image: "https://w7.pngwing.com/pngs/889/976/png-transparent-the-c-programming-language-computer-programming-programming-miscellaneous-blue-computer-thumbnail.png",
        },
        
        {
          name: "Java",
          image: "https://dev.java/assets/images/java-logo-vert-blk.png",
        },
        {
          name: "Node Js",
          image: "https://nodejs.org/static/images/logo.svg",
        },
        /*{
          name: "Express Js",
          image:
            "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png",
        },*/
        {
            name : "MongoDB",
            image : "data:image/jpeg;base64,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",
        },
        {
          name: "MySQL",
          image:
            "data:image/png;base64,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",
        },
    ],
},
    {
      title: "Tools",
      skills: [
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "Visual Studio Code",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
        },
        {
          name: "Postman",
          image:
            "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
        },
      ],
    },
  ];

  const Skills = () => {
    return (
        
        <section className="skills" id="skills">
          <h2 data-aos="zoom-in" data-aos-duration="1000">Skills</h2>
            <div className="skills-container" >
              {skills.map((skill) => (
                <div className="skill" key={skill.title} id="skill" data-aos="zoom-in" data-aos-duration="1000" >
                  <h3 className="skill-title" >{skill.title}</h3>
                  <div className="skill-list" data-aos="slide-down" data-aos-easing="ease-in" data-aos-duration="500"data-aos-delay="400">
                    {skill.skills.map((item) => (
                      <div className="skill-item" key={item.name}>
                        <img src={item.image} alt={item.name} className="skill-image" />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </section>
    )
  }
  
  export default Skills;