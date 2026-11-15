# Claude AI ролигі (9:16, 1080x1920, 35 сек)
- `scene.html` — анимация (браузерде ашсаңыз, тікелей ойнайды). Мәтін мен уақыт `S` массивінде.
- `render.js` — кадрларды Playwright арқылы түсіреді: `node render.js frames`
- MP4 жинау: `ffmpeg -framerate 30 -i frames/f%05d.jpg -i voice.mp3 -c:v libx264 -pix_fmt yuv420p -shortest out.mp4`
