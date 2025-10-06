document.addEventListener('DOMContentLoaded', function() {
    // Player elements - PINDAHIN KE ATAS
    const playPauseBtn = document.querySelector('.play-pause');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeEl = document.querySelector('.current-time');
    const maxDurationEl = document.querySelector('.max-duration');
    const lyricsContainer = document.querySelector('.lyrics');
    const volumeSlider = document.querySelector('.volume-slider');
    const progressArea = document.querySelector('.progress-area');
    const visualizer = document.getElementById('visualizer'); // INI DIPINDAH KE ATAS
    
    // Create floating particles
    createParticles();
    
    // Create visualizer bars
    createVisualizer();
    
    // Lyrics data
    const lyricsData = [
        { time: 0.15, text: "We don't talk anymore" },
        { time: 2.75, text: "We don't talk anymore" },
        { time: 5.08, text: "We don't talk anymore" },
        { time: 6.82, text: "Like we used to do" },
        { time: 10.02, text: "We don't love anymore" },
        { time: 12.33, text: "What was all of it for?" },
        { time: 14.48, text: "Oh, we don't talk anymore" },
        { time: 16.33, text: "Like we used to do" },
        { time: 19.50, text: "I just heard you found the one you've been looking" },
        { time: 22.82, text: "You've been looking for" },
        { time: 25.43, text: "I wish I would have known that wasn't me" },
        { time: 29.18, text: "'Cause even after all this time I still wonder" },
        { time: 32.57, text: "Why I can't move on" },
        { time: 35.15, text: "Just the way you did so easily?" },
        { time: 39.09, text: "Don't wanna know" },
        { time: 40.93, text: "What kind of dress you're wearing tonight" },
        { time: 43.27, text: "If he's holding onto you so tight" },
        { time: 45.76, text: "The way I did before" },
        { time: 48.65, text: "I overdosed" },
        { time: 50.54, text: "Should've known your love was a game" },
        { time: 52.85, text: "Now I can't get you out of my brain" },
        { time: 55.34, text: "Oh, it's such a shame" },
        { time: 58.00, text: "That we don't talk anymore" },
        { time: 60.36, text: "We don't talk anymore" },
        { time: 62.67, text: "We don't talk anymore" },
        { time: 64.41, text: "Like we used to do" },
        { time: 67.58, text: "We don't love anymore" },
        { time: 69.86, text: "What was all of it for?" },
        { time: 72.01, text: "Oh, we don't talk anymore" },
        { time: 74.03, text: "Like we used to do" },
        { time: 77.11, text: "I just hope you're lying next to somebody" },
        { time: 80.47, text: "Who knows how to love you like me" },
        { time: 83.09, text: "There must be a good reason that you're gone" },
        { time: 86.79, text: "Every now and then I think you" },
        { time: 89.29, text: "Might want me to come show up at your door" },
        { time: 92.52, text: "But I'm just too afraid that I'll be wrong" },
        { time: 96.53, text: "Don't wanna know" },
        { time: 98.48, text: "If you're looking into her eyes" },
        { time: 101.05, text: "If she's holding onto you so tight" },
        { time: 103.45, text: "The way I did before" },
        { time: 106.10, text: "I overdosed" },
        { time: 108.29, text: "Should've known your love was a game" },
        { time: 110.42, text: "Now I can't get you out of my brain" },
        { time: 112.98, text: "Ooh, it's such a shame" },
        { time: 115.65, text: "That we don't talk anymore (we don't, we don't)" },
        { time: 118.22, text: "We don't talk anymore (we don't, we don't)" },
        { time: 120.41, text: "We don't talk anymore" },
        { time: 121.92, text: "Like we used to do" },
        { time: 125.19, text: "We don't love anymore (we don't, we don't)" },
        { time: 127.67, text: "What was all of it for? (We don't, we don't)" },
        { time: 130.05, text: "Oh, we don't talk anymore" },
        { time: 131.64, text: "Like we used to do" },
        { time: 135.70, text: "" },
        { time: 143.81, text: "Like we used to do" },
        { time: 149.06, text: "" },
        { time: 154.35, text: "Don't wanna know" },
        { time: 156.00, text: "What kind of dress you're wearing tonight" },
        { time: 158.38, text: "If he's giving it to you just right" },
        { time: 160.87, text: "The way I did before" },
        { time: 163.88, text: "I overdosed" },
        { time: 165.74, text: "Should've known your love was a game" },
        { time: 168.08, text: "Now I can't get you out of my brain" },
        { time: 170.52, text: "Oh, it's such a shame" },
        { time: 173.25, text: "That we don't talk anymore (we don't, we don't)" },
        { time: 175.76, text: "We don't talk anymore (we don't, we don't)" },
        { time: 177.91, text: "We don't talk anymore" },
        { time: 179.55, text: "Like we used to do" },
        { time: 182.75, text: "We don't love anymore (we don't, we don't)" },
        { time: 185.23, text: "What was all of it for? (we don't, we don't)" },
        { time: 187.68, text: "Oh, we don't talk anymore" },
        { time: 189.14, text: "Like we used to do" },
        { time: 192.59, text: "(We don't talk anymore) Don't wanna know" },
        { time: 194.22, text: "What kind of dress you're wearing tonight (oh)" },
        { time: 196.94, text: "If he's holding onto you so tight (oh)" },
        { time: 199.38, text: "The way I did before" },
        { time: 201.95, text: "(We don't talk anymore) I overdosed" },
        { time: 204.43, text: "Should've known your love was a game (oh)" },
        { time: 206.43, text: "Now I can't get you out of my brain (woah)" },
        { time: 208.88, text: "Ooh, it's such a shame" },
        { time: 211.65, text: "We don't talk anymore" },
        { time: 212.69, text: "" }
    ];
    
    // SIMPLE AUDIO SETUP - kayak di test file
    const audio = new Audio('we-dont-talk-anymore.flac');
    
    // Set initial volume
    audio.volume = volumeSlider.value / 100;
    
    // Debug events
    audio.addEventListener('canplay', function() {
        console.log('✅ FLAC bisa diputar - audio ready');
    });
    
    audio.addEventListener('error', function() {
        console.error('❌ Audio error:', audio.error);
    });
    
    // Populate lyrics
    lyricsData.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.text;
        p.dataset.time = item.time;
        lyricsContainer.appendChild(p);
    });
    
    // Play/Pause functionality - SIMPLE
    let isPlaying = false;
    
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    function playMusic() {
        isPlaying = true;
        playPauseBtn.innerHTML = '⏸';
        playPauseBtn.title = 'Pause';
        audio.play();
        startVisualizer();
    }
    
    function pauseMusic() {
        isPlaying = false;
        playPauseBtn.innerHTML = '▶';
        playPauseBtn.title = 'Play';
        audio.pause();
        stopVisualizer();
    }
    
    // Update progress bar
    audio.addEventListener('timeupdate', (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        
        // Update progress bar width
        let progressWidth = (currentTime / duration) * 100;
        progressBar.style.width = `${progressWidth}%`;
        
        // Update current time
        currentTimeEl.textContent = formatTime(currentTime);
        
        // Update lyrics highlighting
        updateLyricsHighlight(currentTime);
        
        // Update visualizer
        updateVisualizer();
    });
    
    // Update total duration on load
    audio.addEventListener('loadedmetadata', () => {
        maxDurationEl.textContent = formatTime(audio.duration);
    });
    
    // When audio ends
    audio.addEventListener('ended', () => {
        pauseMusic();
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    });
    
    // Click on progress bar to seek
    progressArea.addEventListener('click', (e) => {
        let progressWidth = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = audio.duration;
        
        audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
        playMusic();
    });
    
    // Volume control
    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value / 100;
    });
    
    // Format time in minutes:seconds
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        
        let min = Math.floor(seconds / 60);
        let sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }
    
    // Update lyrics highlighting based on current time
    function updateLyricsHighlight(currentTime) {
        const lyricsLines = document.querySelectorAll('.lyrics p');
        let currentLine = null;
        
        // Find the current line based on time
        for (let i = lyricsData.length - 1; i >= 0; i--) {
            if (currentTime >= lyricsData[i].time) {
                currentLine = lyricsLines[i];
                break;
            }
        }
        
        // Remove highlight from all lines
        lyricsLines.forEach(line => {
            line.classList.remove('current-line');
        });
        
        // Add highlight to current line
        if (currentLine) {
            currentLine.classList.add('current-line');
            
            // Scroll to current line
            currentLine.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
    
    // Control buttons functionality
    document.querySelector('.repeat-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        audio.loop = !audio.loop;
    });
    
    document.querySelector('.shuffle-btn').addEventListener('click', function() {
        this.classList.toggle('active');
    });
    
    // Create floating particles
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 3 + 1;
            
            // Random animation delay
            const delay = Math.random() * 5;
            
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Create visualizer bars
    function createVisualizer() {
        const barCount = 30;
        for (let i = 0; i < barCount; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.animationDelay = `${i * 0.05}s`;
            visualizer.appendChild(bar);
        }
    }
    
    // Visualizer animation control
    function startVisualizer() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.animationPlayState = 'running';
        });
    }
    
    function stopVisualizer() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.animationPlayState = 'paused';
        });
    }
    
    function updateVisualizer() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (isPlaying) {
                const randomHeight = Math.random() * 30 + 20;
                bar.style.height = `${randomHeight}px`;
            }
        });
    }
    
    // Initialize
    pauseMusic();
});