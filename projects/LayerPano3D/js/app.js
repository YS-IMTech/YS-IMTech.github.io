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
        case 'teaser':
            promptTextBox.text("Autumn park scene with people sitting on benches surrounded by colorful trees, storybook illustration style.");
            break;
        case 'v1_0':
            promptTextBox.text("Magical academy courtyard with floating orbs of light, ancient stone buildings, and a large tree in the center, mystical and enchanting.");
            break;
        case 'v1_7':
            promptTextBox.text("Cherry blossom trees in full bloom with petals gently falling, a tranquil river running through, soft lighting, and vibrant colors.");
            break;
        case 'v1_8':
            promptTextBox.text("A boat on lake, trees and rocks near the lake. a house and port in front of a house, anime style.");
            break;
        case 'v1_9':
            promptTextBox.text("Cozy livingroom in christmas");
            break;
        case 'v1_10':
            promptTextBox.text("Ancient stone monoliths standing in a grassy field under a cloudy sky.");
            break;
        case 'v2_0':
            promptTextBox.text("Magician's cabin in a tranquil forest, with a flagpole bearing a red flag, beside a flowing river.");
            break;
        case 'v2_1':
            promptTextBox.text("Now-covered pine trees by a frozen lake under a clear blue sky.");
            break;
        case 'v2_3':
            promptTextBox.text("Postapocalyptic city in desert.");
            break;
        case 'v2_4':
            promptTextBox.text("A lively village market with outdoor stalls, fresh produce, and villagers mingling in the morning sun.");
            break;
        case 'v2_5':
            promptTextBox.text("A modern and spacious kitchen with sleek dark cabinets, wooden countertops, large windows, and warm lighting.");
            break;
        case 'v2_6':
            promptTextBox.text("Traditional East Asian landscape scene.");
            break;
        case 'v2_8':
            promptTextBox.text("Sandy beach, large driftwood in the foreground, calm sea beyond, realism style.");
            break;
        case 'v2_10':
            promptTextBox.text("A cozy living room decorated with a glowing Christmas tree, warm lighting, and festive furnishings.");
            break;


    }


    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "videos/results/" + mode + "/" + pill + ".mp4";
    // console.log("videos/results/" + mode + "/" + pill + ".mp4");
    video_active.load();
}

function activateTeaserVid() {
    var video = document.getElementById("teaserVideo");
    video.src = "videos/teaser.mp4";
    video.load();
}