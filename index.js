const videos = [
    { title: 'Short Video 1', category: 'short-form', thumbnail: 'path/to/thumbnail1.jpg', videoUrl: 'path/to/video1.mp4' },
    { title: 'Long Video 1', category: 'long-form', thumbnail: 'path/to/thumbnail2.jpg', videoUrl: 'path/to/video2.mp4' },
    { title: 'Gaming Video 1', category: 'gaming', thumbnail: 'path/to/thumbnail3.jpg', videoUrl: 'path/to/video3.mp4' },
    // Add more video objects here
];

function displayVideos(videosToDisplay) {
    const gallery = document.getElementById('video-gallery');
    gallery.innerHTML = '';
    videosToDisplay.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" onclick="openLightbox('${video.videoUrl}')">
            <h3>${video.title}</h3>
        `;
        gallery.appendChild(videoItem);
    });
}

function filterVideos(category) {
    if (category === 'all') {
        displayVideos(videos);
    } else {
        const filteredVideos = videos.filter(video => video.category === category);
        displayVideos(filteredVideos);
    }
}

function openLightbox(videoUrl) {
    //
