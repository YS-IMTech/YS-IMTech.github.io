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
        case 'c22':
            promptTextBox.text("A vibrant city avenue, bustling traffic, towering skyscrapers, monet painting");
            break;
        case 'c7':
            promptTextBox.text("A bustling downtown street, alive with traffic, and shadowed by imposing skyscrapers, Vincent van Gogh");
            break;
        case 'c8':
            promptTextBox.text("Cyberpunk city, Vincent van Gogh");
            break;
        case 'c10':
            promptTextBox.text("Bustling city street at sunset, skyscrapers, streets, cars, monet painting");
            break;
        case 'c12':
            promptTextBox.text("Bustling city street at sunset, skyscrapers, streets, cars, cartoon");
            break;
        case 'c21':
            promptTextBox.text("A vibrant city boulevard, brimming with cars, and surrounded by towering buildings, anime style");
            break;
        case 'c22':
            promptTextBox.text("A lively city street, teeming with traffic, and dominated by towering skyscrapers, monet painting");
            break;
        case 'c25':
            promptTextBox.text("A vibrant city avenue, bustling traffic, towering skyscrapers, Ukiyo-e painting");
            break;
        case 'l1':
            promptTextBox.text("A tranquil dusk scene, serene lake, distant mountains, setting sun, DSLR 35mm Landscape");
            break;
        case 'd1':
            promptTextBox.text("An expansive desert landscape, majestic sand dunes, rugged rock formations, a clear sky, black and white color painting");
            break;
        case 'd3':
            promptTextBox.text("An expansive desert landscape, majestic sand dunes, rugged rock formations, a clear sky, Ukiyo-e painting");
            break;
        case 'd6':
            promptTextBox.text("An expansive desert landscape, majestic sand dunes, rugged rock formations, a clear sky, black and white photo");
            break;
        case 'hv6':
            promptTextBox.text("A Japanese village by a serene river with cherry blossoms and Mount Fuji in the background, anime artwork");
            break;
        case 'hv8':
            promptTextBox.text("A Japanese village by a serene river with cherry blossoms and Mount Fuji in the background, Ukiyo-e painting");
            break;
        case 'a2':
            promptTextBox.text("Aurora Borealis, night sky with vibrant hues of green and blue, rugged coastal, solitary peak, DSLR 35mm Landscape");
            break;
        case 'l15':
            promptTextBox.text("A tranquil mountain lake, crystal clear reflections, majestic mountains, blue sky, black and white photo");
            break;
        case 'v1':
            promptTextBox.text("Rural English countryside, tree, farmhouse, oil painting");
            break;
        case 'v2':
            promptTextBox.text("Rural English countryside, tree, farmhouse, Vincent van Gogh");
            break;
        case 'v6':
            promptTextBox.text("Traditional East Asian landscape scene, ink painting");
            break;

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