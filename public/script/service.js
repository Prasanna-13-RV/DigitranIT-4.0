const firstSectionServices = document.querySelector('.left-main-div-services');

const firstServiceBlock = document.querySelector('.first-service-block');
const secondServiceBlock = document.querySelector('.second-service-block');
const thirdServiceBlock = document.querySelector('.third-service-block');
const fourthServiceBlock = document.querySelector('.forth-service-block');
const fifthServiceBlock = document.querySelector('.fifth-service-block');
const sixthServiceBlock = document.querySelector('.sixth-service-block');

const leftServices = document.querySelector('.left-services');

const servicepage = (block, message) => {
    block.addEventListener('click', () => {
        leftServices.innerHTML = message;
    });
}

servicepage(firstSectionServices, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit aut
consequatur est adipisci eligendi praesentium aspernatur, debitis placeat obcaecati, eaque veniam
laboriosam corrupti incidunt, temporibus corporis! Assumenda ducimus facere iste.`);

servicepage(firstServiceBlock, `Every good business requires a website and a mobile app. Stuck at that step? Don't Worry! Our team of trained professionals will work very diligently in creating the best possible solutions to your problems.`);

servicepage(secondServiceBlock, `Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and manage software robots that emulate humans actions interacting with digital systems and software. Just like people, software robots can do things like basic cognitive functions, and perform a wide range of defined actions. But software robots can do it faster and more consistently than people.`);

servicepage(thirdServiceBlock, `Business process management (BPM) leverages software and services to provide total visibility into your organization’s business processes. BPM helps you automate, monitor and optimize continuously improve business processes to increase efficiency and reduce costs. Success breeds success, so we take an incremental approach that allows us to quickly prove our value with a single project.`);

servicepage(fourthServiceBlock, `Cloud migration is the process of moving digital assets — like data, workloads, IT resources, or applications — to cloud infrastructure. Cloud migration commonly refers to moving tools and data from old, legacy infrastructure or an on-premises* data center to the cloud. Basically, we are taking a huge burden off your shoulders and putting them onto our servers.`);

servicepage(fifthServiceBlock, `Business is moving faster than ever before, with new skill requirements constantly emerging, particularly within technology roles. This shift presents a challenge for leaders of HR and talent acquisition - how do they locate and attract these niche skills? Well, we are here to streamline the process and make it all the more amazing.`);

servicepage(sixthServiceBlock, `We support our customers to transform their current state business operations into Artificial Intelligence (AI) based Data Analytics powered IOT supportable Digital Transformation solutions in a phased manner, using the sustainably scalable Cloud platforms provided by the leading Cloud computing services providers Amazon, Google and Azure.`);