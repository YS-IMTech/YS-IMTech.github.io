// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];
});

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    if (modePill) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    pill = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");

    promptTextBox = $('#prompt-box');

    switch (pill) {
        case 'a city street covered in snow with cherry blossom trees lining the sidewalks':
            promptTextBox.text("A city street covered in snow with cherry blossom trees lining the sidewalks.");
            break;
        case 'a cute golden retriever wearing sunglasses and running outside in the rain':
            promptTextBox.text("A cute golden retriever wearing sunglasses and running outside in the rain.");
            break;
        case 'a group of three animals walking down a dirt road':
            promptTextBox.text("A group of three animals walking down a dirt road.");
            break;
        case 'a large glass display case filled with various electronic devices':
            promptTextBox.text("A large glass display case filled with various electronic devices.");
            break;
        case 'a lighthouse on a cliff overlooking the ocean':
            promptTextBox.text("A lighthouse on a cliff overlooking the ocean.");
            break;
        case 'a man standing on a hill overlooking a stunning mountain lake':
            promptTextBox.text("A man standing on a hill overlooking a stunning mountain lake.");
            break;
        case 'a red gondola lift in a mountainous region, with a beautiful sunset in the background':
            promptTextBox.text("A red gondola lift in a mountainous region, with a beautiful sunset in the background.");
            break;
        case 'a red car driving down a country road with a grassy field on the side':
            promptTextBox.text("A red car driving down a country road with a grassy field on the side");
            break;
        case 'a river with rough waters and rapids, with a rocky mountain in the background':
            promptTextBox.text("A river with rough waters and rapids, with a rocky mountain in the background.");
            break;
        case 'a robot standing in a desolate, futuristic city':
            promptTextBox.text("A robot standing in a desolate, futuristic city.");
            break;
        case 'a rocky coastline with a lighthouse standing on a cliff':
            promptTextBox.text("A rocky coastline with a lighthouse standing on a cliff.");
            break;
        case 'a serene pond filled with colorful koi fish':
            promptTextBox.text("A serene pond filled with colorful koi fish.");
            break;
        case 'a serene snowy landscape with a still lake surrounded by snow-covered trees and mountains in the background':
            promptTextBox.text("A serene snowy landscape with a still lake surrounded by snow-covered trees and mountains in the background.");
            break;
        case 'a white SUV driving down a dirt road in a forested mountain valley':
            promptTextBox.text("A white SUV driving down a dirt road in a forested mountain valley.");
            break;
        case 'Stonehenge in Wiltshire, England, under the green Northern Lights':
            promptTextBox.text("Stonehenge in Wiltshire, England, under the green Northern Lights.");
            break;
        // case 'l15':
        //     promptTextBox.text("A tranquil mountain lake, crystal clear reflections, majestic mountains, blue sky, black and white photo");
        //     break;
        // case 'v1':
        //     promptTextBox.text("Rural English countryside, tree, farmhouse, oil painting");
        //     break;


        // default:
        //     promptTextBox.text("Missing prompt...");
        //     break;
    }
    // promptTextBox.text("Loading...");

    // console.log("Pill: " + pill + " Mode: " + mode);

    // if (videoSwitch.checked) {
    //     mode = 'depth'
    // } else {
    //     mode = 'rgb'
    // }

    // swap video to avoid flickering

    var video_active_source = document.querySelector("#compVideo" + activeVidID + " source");
    var video_hidden_source = document.querySelector("#compVideo" + (1 - activeVidID) + " source");
    

    console.log("[info]", video_active_source); 

    video_active_source.dataset.src = "videos/results/" + mode + "/" + pill + ".mp4";
    // video_active_source.dataset.vrsrc = video_active_source.dataset.src;
    video_active_source.src = "videos/results/" + mode + "/" + pill + ".mp4";

    // var video_active = document.getElementById("compVideo" + activeVidID);
    video_active_source.setAttribute('src', video_active_source.getAttribute('data-src'));
    const videoElement = document.querySelector('#compVideo'+ activeVidID);


    videoElement.src = "videos/results/" + mode + "/" + pill + ".mp4";


    videoElement.load(); // 强制重新加载视频
    videoElement.play();

    console.log("[info videoElement]", videoElement); 

}

function activateTeaserVid() {
    var video = document.getElementById("teaserVideo");
    video.src = "videos/teaser.mp4";
    video.load();
}