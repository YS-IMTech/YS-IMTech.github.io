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
            promptTextBox.text("A vibrant city avenue, bustling traffic, towering skyscrapers, cartoon style.");
            break;
        case 'v1_0':
            promptTextBox.text("Sheep grazing in a tranquil landscape with trees and distant mountains, cartoon style.");
            break;
        case 'v1_1':
            promptTextBox.text("Sandy beach, large driftwood in the foreground, calm sea beyond, realism style");
            break;
            
        case 'v2_6':
            promptTextBox.text("Stonehenge-like structure in the middle of a vast plain, under a cloudy sky, Photorealism style.");
            break;

        case 'v2_8':
            promptTextBox.text("Ancient stone monoliths standing in a grassy field under a cloudy sky.");
            break;
        case 'v2_13':
            promptTextBox.text("Autumn forest path covered with fallen leaves, surrounded by colorful trees.");
            break;
        case 'v2_19':
            promptTextBox.text("Snow-covered pine trees by a frozen lake under a clear blue sky.");
            break;
        case 'v2_23':
            promptTextBox.text("Ancient stone fortresses on rocky islands surrounded by crashing ocean waves under a stormy sky.");
            break;
        case 'v3_1':
            promptTextBox.text("Fantasy landscape with giant pumpkins in vibrant fields under a dramatic sky, fantasy style");
            break;
        case 'v3_2':
            promptTextBox.text("Sunny seaside village with colorful houses and boats, anime style.");
            break;
        case 'v3_8':
            promptTextBox.text("Autumn park scene with people sitting on benches surrounded by colorful trees, storybook illustration style.");
            break;
        case 'v3_9':
            promptTextBox.text("Elegant home library with wooden bookshelves, ornate ceiling, and warm lighting, classical interior design style.");
            break;
        case 'v3_10':
            promptTextBox.text("Charming town square with cobblestone streets and classic European architecture, digital painting style.");
            break;
        case 'v3_11':
            promptTextBox.text("Rolling hills with oversized pumpkins and colorful flower fields under a vibrant sky, surreal landscape style.");
            break;
        case 'v3_12':
            promptTextBox.text("Whimsical bakery interior with colorful displays of pastries and cartoon-like characters, vibrant cartoon style.");
            break;
        case 'v4_7':
            promptTextBox.text("Pumpkin field with whimsical scarecrows under a soft, dreamy sky, folk art style.");
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