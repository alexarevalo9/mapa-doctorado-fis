var geojson;
var map;
var arrayMarkers = [];
var currentMarker;
var size = 200;
var flagLayer;
var selectTag;
jQuery(document).ready(function() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWxleGFyZXZhbG85IiwiYSI6ImNqenNqZTFjNTAydDIzbW54bXZvMHpjYmsifQ._GESnmG3HCwGT5thJrIyWw";
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-96, 37.8],
    zoom: 1
  });

  geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.6146048, -0.9315345]
        },
        properties: {
          title: "Latacunga, Ecuador",
          description:
            "Anchundia, C. (2017). The vision of aspects to improve problem solving skills: A case study. XII Jornadas Iberoamericanas de Ingenieria de Software e Ingenieria del Conocimiento 2017 (JIISIC'17) Held jointly with the Ecuadorian Conference on Software Engineering (CEIS'2017) and the Conference on Software Engineering Applied to Control and Automat (pág. 367 (1 Vol)). Latacunga, Ecuador: Gomez, O. S."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-58.363292, -34.6242199]
        },
        properties: {
          title: "Buenos Aires, Argentina",
          description:
            "Anchundia, C. (2017). The replication of experiments in software engineering, a dilemma associated with knowledge generation. 20th Conferencia Iberoamericana en Software Engineering (CIbSE 2017) (pág. 837 (4 Vols). Buenos Aires, Argentina: Curran Associates, Inc. CIbSE - IberoAmerican Conference on Software Engineering Steering Committee."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-115.4551953, 36.1252285]
        },
        properties: {
          title: "Las Vegas, NV, USA",
          description:
            "Andrade , R., & et al. (2018). Management of information security indicators under a cognitive security model. 8th Annual Computing and Communication Workshop and Conference ( (CCWC), IEEE 2018, (págs. 478 - 483). Las Vegas, NV, USA."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.4727036, -0.3359283]
        },
        properties: {
          title: "Sangolqui, Ecuador",
          description:
            "Andrade , R., & et al. (2019). Cognitive Security for Incident Management Process. En Á. F. Rocha (Ed.), The International Conference on Information Systems and Technologies Proceedings (ICITS) (págs. 612-621). Sangolqui, Ecuador : Springer Nature."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-123.0677167, 49.2583185]
        },
        properties: {
          title: "Vancouver, BC, Canadá",
          description:
            "Andrade , R., & Torres, J. (2018). Self-Awareness as an enabler of Cognitive Security. 9th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON) (págs. 701-708). Vancouver, BC, Canadá: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [24.4744273, 35.3153864]
        },
        properties: {
          title: "Crete, Greece",
          description:
            "Tello Oquendo, L., Tapia Leon, F., Fuertes, W., Andrade, R., Samaniego Erazo, G., Torres, J., & Cadena, A. (2019). A Structured Approach to Guide the Development of Incident Management Capability for Security and Privacy. The 21st International Conference on Enterprise Information Systems (ICEIS). Crete, Greece."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-8.6569732, 41.1622023]
        },
        properties: {
          title: "Porto, Portugal",
          description:
            "Andrade, R. (2019). Methodology for Design AAL-IOT solutions for Older Adults. EH 2019 : 11th International Conference e-Health 2019. Porto, Portugal."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-123.0995737, 49.2431975]
        },
        properties: {
          title: "Vancouver, BC, Canadá",
          description:
            "Andrade, R., & Torres, J. (2018). Enhancing intelligence SOC with big data tools. 9th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON) (págs. 1076-1080). Vancouver, BC, Canadá: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-43.3871697, -22.880989]
        },
        properties: {
          title: "Rio de Janeiro, Brasil",
          description:
            "Cadena, A., Gualoto, F., Fuertes, W., Tello-Oquendo, L., Andrade , R., Tapia, F., & Torres, J. (2019). Metrics and Indicators of Information Security Incident Management: A Systematic Mapping Study. En Á. R. Pereira (Ed.), The Multidisciplinary International Conference of Research Applied to Defense and Security (MICRADS). volume 152, págs. 507-519. Rio de Janeiro, Brasil: Smart Innovation, Systems and Technologies book series (SIST)."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-123.0920817, 49.2418945]
        },
        properties: {
          title: "Vancouver, BC, Canadá",
          description:
            "Andrade, R., & Torres, J. (2018). Enhancing intelligence SOC with big data tools. 9th Annual Information Technology, Electronics and Mobile Communication Conference (IEMCON) (págs. 1076-1080). Vancouver, BC, Canadá: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.9592387, -2.2211316]
        },
        properties: {
          title: "Salinas, Ecuador",
          description:
            "Barriga, J., & Yoo, S. (2018). Security over Smart Home Automation Systems: A Survey. En Á. R. Guarda (Ed.), Proceedings of the Multidisciplinary International Conference of Research Applied to Defense and Security (MICRADS). SIST, volume 94, págs. 87-96. Salinas, Ecuador: Smart Innovation, Systems and Technologies, Springer, Cham."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-74.2478958, 4.6486259]
        },
        properties: {
          title: "Bogotá, Colombia",
          description:
            "Barriga A, J., Yoo, S., & Polo, J. (2019). Enhancement to the Privacy-Aware Authentication for Wi-Fi Based Indoor Positioning Systems. En Z. J. al. (Ed.), 1st international workshop on Artificial Intelligence and Industrial Internet-of-Things Security (AIoTS). vol 11605, págs. 143-155. Bogotá Colombia: Lecture Notes in Computer Science Springer, Cham."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [174.5852785, -36.8621448]
        },
        properties: {
          title: "Auckland, New Zealand",
          description:
            "Yoo, S. G., & Barriga, B. J. (2017). Privacy-Aware Authentication for Wi-Fi Based Indoor Positioning Systems. En L. B. Li (Ed.), 8th International Conference, Applications and Techniques in Information Security ATIS 2017. CCIS, volume 719, págs. 201-213. Auckland, New Zealand: Communications in Computer and Information Science. Springer, Singapore."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.9527467, -2.2305946]
        },
        properties: {
          title: "Salinas, Ecuador",
          description:
            "Bastidas , A., & Pérez, M. (2017). Transpiler-based architecture for multi-platform web applications. IEEE Second Ecuador Technical Chapters Meeting (ETCM) (págs. 1-6). Salinas, Ecuador: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.0243997, -2.892183]
        },
        properties: {
          title: "Cuenca, Ecuador",
          description:
            "Bastidas, A., & Pérez, M. (2018). A systematic review on Transpiler usage for Transaction-Oriented Applications. IEEE Third Ecuador Technical Chapters Meeting (ETCM) (págs. 1-6.). Cuenca, Ecuador: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.5001181, -1.0196141]
        },
        properties: {
          title: "Quevedo, Ecuador",
          description:
            "Benavides , D. (2019). Characterization of Phishing Attacks and Techniques to Mitigate These. 1ST International Congress on University Development Universidad Técnica Estatal de Quevedo ( CIDU 2019). Quevedo, Ecuador."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.4643087, -1.0240536]
        },
        properties: {
          title: "Quevedo, Ecuador",
          description:
            "Benavides , D., Rodríguez , G., Fuertes, W., & Torres , J. (2018). Un modelo para crear conciencia en las personas acerca de los ataques de ingeniería social. II Congreso de Tecnología para el Desarrollo (TECDES) Semana de la Ciencia. Quevedo, Ecuador."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.4621517, -1.0220686]
        },
        properties: {
          title: "Quevedo, Ecuador",
          description:
            "Benavides, D. (2019). FNCS: Proposal of a platform for the managenment of network devices based in RouterOS. 1ST International Congress on University Development Universidad Técnica Estatal de Quevedo. Quevedo, Ecuador."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [2.1561973, 41.398094]
        },
        properties: {
          title: "Barcelona, Spain",
          description:
            "Benavides, D. (2019). Phishing attacks detection using Machine Learning, Feature Selection and Neural Networks algorithms. The first IEEE Symposium on Computers and Communications (ISCC). Barcelona, Spain."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.4618087, -1.0239136]
        },
        properties: {
          title: "Quevedo, Ecuador",
          description:
            "Benavides, D. (2019). Proposal of a prototype of a low cost vacuum cleaner applied for small scale cleaning processes. 1ST International Congress on University Development Universidad Técnica Estatal de Quevedo (CIDU). Quevedo, Ecuador."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.4629887, -1.0250396]
        },
        properties: {
          title: "Quevedo, Ecuador",
          description:
            "Benavides, D. (2019). Propuesta de una plataforma de bajo costo basada en internet de las cosas para agricultura inteligente. 3er Congreso Internacional de Tecnologías para el Desarrollo Universidad Técnica (TECDES). Vol. 3. Machala, Ecuador: Conference Proceedings UTMACH."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.4619047, -1.0260586]
        },
        properties: {
          title: "Quevedo, Ecuador",
          description:
            "Benavides, D. (2019). Use of information and communication technologies to strenghthen learning tsa'fiqui in bilingual intercultural educational tsa'chila units. 1ST International Congress University Development Universidad Técnica Estatal de Quevedo. Quevedo, Ecuador."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-43.445982, -22.9141308]
        },
        properties: {
          title: "Rio de Janeiro, Brasil",
          description:
            "Benavides, D., Fuertes, W., Sánchez , S., & Sanchez, M. (2019). Classification of Phishing Attack Solutions by Employing Deep Learning Techniques: A Systematic Literature Review. the Multidisciplinary International Conference of Research Applied to Defense and Security (MICRADS). volume 152, págs. 51-64. Rio de Janeiro, Brasil: Smart Innovation, Systems and Technologies book series."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.570627, -0.1862504]
        },
        properties: {
          title: "Quito, Ecuador",
          description:
            "Betancourt , N., Almeida, C., & Flores, M. (2019). T Wave Alternans Analysis in ECG Signal: A Survey of the Principal Approaches. En F. C. Rocha Á. (Ed.), The International Conference on Information Technology & Systems (ICITS’19). vol 918, págs. 417-426. Quito, Ecuador: Advances in Intelligent Systems and Computing. Springer, Cham."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [17.8419696, 59.326242]
        },
        properties: {
          title: "Stockholm, Sweden",
          description:
            "Betancourt, N., Flores, M., & Almeida, C. (2019). ECG Denoising by using FIR and IIR Filtering Techniques: An Experimental Study. Proceedings of the 11th International Conference on Bioinformatics and Biomedical Technology ICBBT'19 (págs. 111-117). Stockholm, Sweden: ACM DL."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-74.0749817, 4.6756963]
        },
        properties: {
          title: "Bogotá, Colombia",
          description:
            "Carrión, M., & et al. (2017). A participatory methodology for the design of serious games in the educational environment. Congreso Internacional de Innovacion y Tendencias en Ingenieria (CONIITI) (págs. 1-6). Bogotá, Colombia: CONIITI."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-82.3578247, 23.0853389]
        },
        properties: {
          title: "La Habana, Cuba",
          description:
            "Carrión, M., Santórum, M., Aguilar, J., & Pérez, M. (2019). iPlus Methodology for Requirements Elicitation for Serious Games. 22nd Iberoamerican Conference on Software Engineering (CIbSE). La Habana, Cuba."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [4.2233206, 50.838833]
        },
        properties: {
          title: "Brussels, Belgium",
          description:
            "Diaz, O. (2019). Process Mining, Text and Opinion to Generate a Seismic Event Log. IEEE 13th International Conference on Research Challenges in Information Science (RCIS). Brussels, Belgium."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.6284947, -1.2465876]
        },
        properties: {
          title: "Ambato, Ecuador",
          description:
            "Diaz, O., & Pérez, M. (2018). Log Design for Storing Seismic Event Characteristics Using Process, Text, and Opinion Mining Techniques. International Conference on eDemocracy & eGovernment (ICEDEG) (págs. 281-285). Ambato, Ecuador : IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-123.1205057, 49.2306595]
        },
        properties: {
          title: "Vancouver, BC, Canadá",
          description:
            "Gavilanes, F., Loza, E., Riofrío, D., & Segura, M. (2018). Improving the Use of Virtual Worlds in Education Through Learning Analytics: A State of Art. En K. A. Kapoor (Ed.), The Proceedings of the 2018 Future Technologies Conference (FTC). AISC, volume 880, págs. 1123-1132. Vancouver, BC, Canadá: Conference Publishing Services (CPS) Springer, Cham."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.9588337, -2.2156456]
        },
        properties: {
          title: "Salinas, Ecuador",
          description:
            "Herrera, J., & Hernández-Alvarez, M. (2017). Large scale ransomware detection by cognitive security. IEEE Second Ecuador Technical Chapters Meeting (ETCM) (págs. 1-4). Salinas, Ecuador: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.9575037, -2.2171246]
        },
        properties: {
          title: "Salinas, Ecuador",
          description:
            "Jaramillo, A., & Benalcázar, M. (2017). Real-time hand gesture recognition with EMG using machine learning. IEEE Second Ecuador Technical Chapters Meeting (ETCM) (págs. 1-5). Salinas, Ecuador: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.4868987, -0.1584836]
        },
        properties: {
          title: "Quito, Ecuador",
          description:
            "Lopez, C., Santórum, M., & Aguilar, J. (2019). Autonomous Cycles of Collaborative Processes for Integration based on Industry 4.0. En Á. F. Rocha (Ed.), International Conference on Information Technology & Systems. volume 918. Quito, Ecuador: Springer in a book of the AISC ."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [139.7329473, 35.7158643]
        },
        properties: {
          title: "Tokyo, Japan",
          description:
            "López, C., Segura , M., & Santórum, M. (2019). Data Analytics and BI Framework based on Collective Intelligence and the Industry 4.0. The 2nd International Conference on Information Science and System (ICISS) (págs. 93-98). Tokyo, Japan: ICISS-ACM."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [139.7506913, 35.7165433]
        },
        properties: {
          title: "Tokyo, Japan",
          description:
            "López, C., Segura , M., & Santórum, M. (2019). Framework to Develop a Business Synergy through Enterprise Architecture. The 2nd International Conference on Information Science and System (ICISS) (págs. 125-129). Tokyo, Japan: ICISS-ACM."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-115.2385467, 36.1822603]
        },
        properties: {
          title: "Las Vegas, Nevada, USA",
          description:
            "Maldonado, D., Loza, E., & Torres, J. (2018). A Proposal for an Improved Distributed Architecture for. 5th Annual Conf. on Computational Science & Computational Intelligence (CSCI'18). Las Vegas, Nevada, USA: Conference Publishing Services (CPS)."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.1199503, -2.1520379]
        },
        properties: {
          title: "Guayaquil, Ecuador",
          description:
            "Martínez, C., Sang Guun Yoo, & Moreno, H. (2018). Analysis of Traditional Web Security Solutions and Proposal of a Web Attacks Cognitive Patterns Classifier Architecture. En G. A.-M.-M.-L.-L. Prof. Rafael Valencia-García (Ed.), The 4th International Conference on Technologies and Innovation, CITI Proceedings. Guayaquil, Ecuador: Springer International."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-79.9960489, -3.2567732]
        },
        properties: {
          title: "Machala, Ecuador",
          description:
            "Nogales, R., & Benalcázar , M. (2019). Reconocimiento de Gestos de la Mano en Tiempo Real Usando Leap Motion Controller y Machine Learning. Semana de la Ciencia Conference Proceedings ( UTMACH). Volume 3, págs. 823 - 835. Machala, Ecuador: Centro de Investigaciones de la Universidad Técnica de Machala Open Journal Systems."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.4843967, -0.1639066]
        },
        properties: {
          title: "Quito, Ecuador",
          description:
            "Rodríguez, G. (2019). Trusted Phishing: a model to teach computer security through the theft of cookies. En M. L.-A. Botto Tobar (Ed.), the 1st International Conference on Advances in Emerging Trends and Technologies (ICAETT 2019). Volume 1. Quito, Ecuador: Springer Advances in Intelligent Systems and Computing."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-80.8785799, -2.2280533]
        },
        properties: {
          title: "Santa, Elena, Ecuador",
          description:
            "Rodriguez, G., & et al. (2018). Cookie Scout: An Analytic Model for Prevention of Cross-Site Scripting (XSS) Using a Cookie Classifier. En T. G. Álvaro Rocha (Ed.), Proceedings of the International Conference on Information Technology & Systems (ICITS ). Santa Elena, Ecuador: Springer International Publishing."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-115.1614717, 36.1571053]
        },
        properties: {
          title: "Las Vegas, NV, USA",
          description:
            "Sánchez, M., & et al. (2018). FraudFind: Financial fraud detection by analyzing human behavior. 8th Annual Computing and Communication Workshop and Conference (CCWC) (págs. 281-286). Las Vegas, NV, USA: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-0.3817841, 51.5287352]
        },
        properties: {
          title: "London, United Kingdom",
          description:
            "Sánchez, M., & Urquiza, L. (2019). Security Enhancement through Effective Encrypted Communication using ELK. Proceedings of the International Conference on Big Data and Education (ICBDE). London, United Kingdom: ICBDE ACM DL."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.4821497, -0.1835406]
        },
        properties: {
          title: "Quito, Ecuador",
          description:
            "Velepucha, V., Flores, P., & Torres, J. (2019). Migration of monolithic applications towards microservices under the vision of the Information Hiding principle. A Systematic Mapping Study. En M. L.-A. Botto Tobar (Ed.), The International Conference on Advances in Emerging Trends and Technologies (ICAETT). Volume 1, págs. 90-100. Quito, Ecuador: Springer, Cham."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.6310807, -1.2480996]
        },
        properties: {
          title: "Ambato, Ecuador",
          description:
            "Villarroel, J. (2018). Design of a Requirements Meta-Architectural Model for eGovernment Information Systems. Fifth International Conference on eDemocracy & eGovernment (ICEDEG) (págs. 397-399). Ambato,Ecuador: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-78.4895097, -0.1785306]
        },
        properties: {
          title: "Quito, Ecuador",
          description:
            "Villarroel, J., & et al. (2018). Architectural Metamodel for Requirements of Images Accessibility in Online Editors. International Conference on Information Systems and Computer Science (INCISCOS) (págs. 312-319). Quito, Ecuador: IEEE."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-95.6814899, 29.8174782]
        },
        properties: {
          title: "Houston, TX, USA",
          description:
            "Vizuete, Y., Segura, M., & Loza, E. (2019). Estimating poverty: A state-of-the-art of methods. The Publication:ICISDM 2019: Proceedings of the 3rd International Conference on Information System and Data Mining (ICISDM) (págs. 80-86). Houston, TX, USA: ACM DL."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [100.3529072, 13.7251088]
        },
        properties: {
          title: "Bangkok",
          description:
            "Zambrano , P., Torres , J., & Flores , P. (2019). How Does Grooming Fit into Social Engineering? En S. K. Trivedi (Ed.), The International Conference on Computer, Communication and Computational Sciences (IC4S 2018). AISC, volume 924, págs. 629-639. Bangkok: Advances in Computer Communication and Computational Sciences. Advances in Intelligent Systems and Computing Springer, Singapore."
        }
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-43.7261806, -22.9132525]
        },
        properties: {
          title: "Rio de Janeiro, Brasil",
          description:
            "Zambrano, P., Sanchez, M., Torres, J., & Fuertes , W. (2017). BotHook: An option against Cyberpedophilia. En IEEE (Ed.), 1st Cyber Security in Networking Conference (CSNet). Rio de Janeiro, Brasil."
        }
      }
    ]
  };

  hiddenBox();
  selectTag = document.getElementById("selectTag");

  // add markers to map
  geojson.features.forEach(function(marker, i) {
    // create a HTML element for each feature
    var el = document.createElement("div");
    el.className = "marker";

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);

    el.addEventListener("click", function() {
      //console.log(el);
      var nameBox = document.getElementById("name-bar-box");
      nameBox.innerHTML = marker.properties.title;
      var areaBox = document.getElementById("area-box");
      areaBox.innerHTML =
        '<p align="justify">' + marker.properties.description + "</p>";
      addAnimatedIcon(marker);
      showBox();
    });

    arrayMarkers[i] = marker;

    //Create Option Items
    var opctionTag = document.createElement("option");
    opctionTag.setAttribute("value", i);
    opctionTag.innerHTML = marker.properties.title;
    selectTag.appendChild(opctionTag);

    //Add event listener to Select Tag
    selectTag.addEventListener("change", function() {
      var selectedOption = this.options[selectTag.selectedIndex];
      flyToCoordinates(arrayMarkers[selectedOption.value].geometry.coordinates);
      var nameBox = document.getElementById("name-bar-box");
      nameBox.innerHTML = arrayMarkers[selectedOption.value].properties.title;
      var areaBox = document.getElementById("area-box");
      areaBox.innerHTML = '<p align="justify">' + arrayMarkers[selectedOption.value].properties.description + "</p>";
      addAnimatedIcon(arrayMarkers[selectedOption.value]);
      showBox();
    });
  });
});

function addAnimatedIcon(marker) {
  removeIconLayer(marker);
  map.addImage(marker.properties.title, pulsingDot, { pixelRatio: 2 });
  map.addLayer({
    id: marker.properties.title,
    type: "symbol",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: marker.geometry.coordinates
            }
          }
        ]
      }
    },
    layout: {
      "icon-image": marker.properties.title
    }
  });
}

function removeIconLayer(marker) {
  if (flagLayer != null) {
    map.removeLayer(flagLayer);
    map.removeImage(flagLayer);
    map.removeSource(flagLayer);
    flagLayer = null;
  }
  
  if(marker != null){
    flagLayer = marker.properties.title;
  }
  
}

function hiddenBox() {
  removeIconLayer(null);
  $("#right")
    .children(".box-slide")
    .stop()
    .animate({ left: "-310px" }, 500);
}

function showBox() {
  $("#right")
    .children(".box-slide")
    .stop()
    .animate({ top: "0px", left: "0px" }, 500);

  if (document.getElementById("map-box").style.display != "block") {
    document.getElementById("map-box").style.display = "block";
  }
}

function flyToCoordinates(latLag) {
  map.flyTo({
    center: latLag,
    zoom: 14
  });
}

/*
 *    Title: Add an animated icon to the map
 *    Author: mapbox
 *    Availability: https://docs.mapbox.com/mapbox-gl-js/example/add-image-animated/
 */
var pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  // get rendering context for the map canvas when layer is added to the map
  onAdd: function() {
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },

  // called once before every frame where the icon will be used
  render: function() {
    var duration = 1000;
    var t = (performance.now() % duration) / duration;

    var radius = (size / 2) * 0.3;
    var outerRadius = (size / 2) * 0.7 * t + radius;
    var context = this.context;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 150, 150," + (1 - t) + ")";
    context.fill();
    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // continuously repaint the map, resulting in the smooth animation of the dot
    map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
};
