const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const getTitle = $('title');
const getLink = $('[rel="icon"]');
const playRamdom = $('.playRamdom');
const nextLeft = $('.nextLeft');
const nextRight = $('.nextRight');
const playpause = $('.playpause');
const audioRepeat = $('.audioRepeat');
const audio = $('#audio');
const timeCurrent = $('#time-current');
const progress = $('#progress');
const timeDuration = $('#time-duration');
const imgPlayer = $('#imgPlayer');
const infoSong = $('.info-song')
const infoSinger = $('.info-singer')
const boxSong = $('#box-songs');
const play = $('#play');
const pause = $('#pause');
const boxInput = $('#input-update')
const timeline = $('.box-ascending');
const playhead = $('.ascending-content');
const volumeMax = $('#volume-max');
const volumeMin = $('#volume-min');
const voloumeMove = $('#voloume-move');
//Danh mục
const menuLi = $('.menu-li');
const private = $('.private');
const discover = $('.discover');
const popular = $('.popular');
const radio = $('.radio');
const follow = $('.follow');

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRepeat: false,
  isRamdom: false,
  isView: false,
  isRender: false,
  songs: [

    {
      name: 'Con Nợ Mẹ',
      singer: 'Trịnh Đình Quang',
      path: './asset/audio/y2mate.com - Trịnh Đình Quang  Con Nợ Mẹ MV Official.mp3',
      image: './asset/image/Trịnh Đình Quang - Con Nợ Mẹ.jpg'
    },
    {
      name: 'Tha Phương Tuổi 18',
      singer: 'Đặng Thế Chí',
      path: './asset/audio/y2mate.com - Tha Phuong Tuoi 18  Tinh Ca Que Huong  Che  Nhac Che Đang The Chi  Music Video.mp3',
      image: './asset/image/Tha Phương Tuổi 18.jpg'
    },
    {
      name: 'Không Thấy Ngày Về',
      singer: 'Lã Phong Lâm',
      path: './asset/audio/y2mate.com - Không Thấy Ngày Về  Lã Phong Lâm Official MV  Nhạc Chế Đời Đỉnh Cao Một Thời.mp3',
      image: './asset/image/Không Thấy Ngày Về - Lã Phong Lâm.jpg'
    },
    {
      name: 'Cuối Cùng Thì',
      singer: 'Jack J97',
      path: './asset/audio/y2mate.com - Jack  J97  Cuối Cùng Thì  Special Stage Video.mp3',
      image: './asset/image/Cuối cùng thì.jpg'
    },
    {
      name: 'Án Tử Hình',
      singer: 'Lã Phong Lâm',
      path: './asset/audio/y2mate.com - Án Tử Hình  Lã Phong Lâm Tuyến Vũ cover.mp3',
      image: './asset/image/Án Tử Hình - Lã Phong Lâm.jpg'
    },
    {
      name: 'Con Xin Sám Hối REMIX',
      singer: 'Ben Music',
      path: './asset/audio/y2mate.com - CON XIN SÁM HỐI REMIX  BẢN MIX HOT TIKTOK  Ben Music.mp3',
      image: './asset/image/CON XIN SÁM HỐI REMIX - BẢN MIX.jpg'
    },
    {
      name: 'Có Không Giữ Mất Đừng Tìm',
      singer: 'CẢNH MINH OFFICIAL',
      path: './asset/audio/y2mate.com - CÓ KHÔNG GIỮ MẤT ĐỪNG TÌM  CẢNH MINH  OFFICIAL VIDEO MUSIC.mp3',
      image: './asset/image/CÓ KHÔNG GIỮ MẤT ĐỪNG TÌM - CẢNH MINH.jpg'
    },
    {
      name: 'Chiều Thu Họa Bóng Nàng',
      singer: 'DATKAA x QT BEATZ',
      path: './asset/audio/y2mate.com - CHIỀU THU HỌA BÓNG NÀNG  DATKAA x QT BEATZ  OFFICIAL MUSIC VIDEO.mp3',
      image: './asset/image/CHIỀU THU HỌA BÓNG NÀNG - DATKAA x QT BEATZ.jpg'
    },
    {
      name: 'Chân Ái',
      singer: 'ORANGE x KHÓI x CHÂU ĐĂNG KHOA',
      path: './asset/audio/y2mate.com - CHÂN ÁI  ORANGE x KHÓI x CHÂU ĐĂNG KHOA  Official Music Video.mp3',
      image: './asset/image/CHÂN ÁI - ORANGE x KHÓI x CHÂU ĐĂNG KHOA.jpg'
    },
    {
      name: 'Cô Đơn Dành Cho Ai',
      singer: 'LEE KEN x NAL',
      path: './asset/audio/y2mate.com - CÔ ĐƠN DÀNH CHO AI  LEE KEN x NAL  OFFICIAL MUSIC VIDEO.mp3',
      image: './asset/image/CÔ ĐƠN DÀNH CHO AI LEE KEN x NAL.jpg'
    },
    {
      name: 'Em Là Kẻ Đáng Thương',
      singer: 'PHÁT HUY T4',
      path: './asset/audio/y2mate.com - EM LÀ KẺ ĐÁNG THƯƠNG  PHÁT HUY T4  OFFICIAL MV.mp3',
      image: './asset/image/em là kẻ đáng thương.jpg'
    },
    {
      name: 'Em Đồng Ý I Do',
      singer: 'ĐỨC PHÚC x 911 x KHẮC HƯNG  OFFICIAL',
      path: './asset/audio/y2mate.com - EM ĐỒNG Ý I DO  ĐỨC PHÚC x 911 x KHẮC HƯNG  OFFICIAL MUSIC VIDEO  VALENTINE 2023.mp3',
      image: './asset/image/0.jpg'
    },
    {
      name: 'Giang Hải Không Độ Nàng',
      singer: 'GIA HUY x DINH LONG',
      path: './asset/audio/y2mate.com - GIANG HẢI KHÔNG ĐỘ NÀNG  GIA HUY x DINH LONG  Hot tiktok 2022  Phật từng nghe qua bài ca dao.mp3',
      image: './asset/image/GIANG HẢI KHÔNG ĐỘ NÀNG - GIA HUY.jpg'
    },
    {
      name: 'Khi Người Mình Yêu Khóc',
      singer: 'Phan Mạnh Quỳnh ft Bùi Lan Hương',
      path: './asset/audio/y2mate.com - Khi Người Mình Yêu Khóc  Phan Mạnh Quỳnh ft Bùi Lan Hương live at maylangthang (1).mp3',
      image: './asset/image/khi người mình yêu.jpg'
    },
    {
      name: 'Lỡ Hẹn Với Dòng Lam',
      singer: 'Thái Học',
      path: './asset/audio/y2mate.com - Lỡ Hẹn Với Dòng Lam  Thái Học  từ độ chia tay anh phiêu bạt .mp3',
      image: './asset/image/Lỡ Hẹn Với Dòng Lam - Thái Học.jpg'
    },
    {
      name: 'Lửng Lơ',
      singer: 'MASEW x BRAY ft RedT x Ý Tiên',
      path: './asset/audio/y2mate.com - Lửng Lơ  MASEW x BRAY ft RedT x Ý Tiên  MV OFFICIAL.mp3',
      image: './asset/image/artworks-000513902004-p24rpe-t500x500.jpg'
    },
    {
      name: 'Mặt Mộc',
      singer: 'Pham Nguyên Ngoc x VAnh x Ân Nhi',
      path: './asset/audio/y2mate.com - MĂT MÔC  Pham Nguyên Ngoc x VAnh x Ân Nhi Original.mp3',
      image: './asset/image/MẶT MỘC.jpg'
    },
    {
      name: 'Nếu Em Không Về',
      singer: 'Song Luân x Cheris x CaoTri',
      path: './asset/audio/y2mate.com - Nếu Em Không Về Lofi Ver  Song Luân x Cheris x CaoTri.mp3',
      image: './asset/image/Nếu Em Không Về.jpg'
    },
    {
      name: 'Nếu Ta Ngược Lối',
      singer: 'Châu Khải Phong',
      path: './asset/audio/y2mate.com - Nếu Ta Ngược Lối  Châu Khải Phong Mạc Văn Khoa  Official Music Video.mp3',
      image: './asset/image/Nếu Ta Ngược Lối - Châu Khải Phong.jpg'
    },
    {
      name: 'Thay Tôi Yêu Cô Ấy',
      singer: 'THANH HƯNG',
      path: './asset/audio/y2mate.com - THAY TÔI YÊU CÔ ẤY ĐNSTĐ  OFFICIAL MV 4K  THANH HƯNG.mp3',
      image: './asset/image/THAY TÔI YÊU CÔ ẤY THANH HƯNG.jpg'
    },
    {
      name: 'Thương Em',
      singer: 'CHÂU KHẢI PHONG',
      path: './asset/audio/y2mate.com - THƯƠNG EM  CHÂU KHẢI PHONG  OFFICIAL MUSIC VIDEO.mp3',
      image: './asset/image/THƯƠNG EM - CHÂU KHẢI PHONG.jpg'
    },
    {
      name: 'Trót Trao Duyên',
      singer: 'NB3 Hoài Bảo',
      path: './asset/audio/y2mate.com - Trót Trao Duyên  NB3 Hoài Bảo  OFFICIAL MUSIC VIDEO.mp3',
      image: './asset/image/Trót Trao Duyên.jpg'
    },
    {
      name: 'Túy Âm',
      singer: 'Xesi x Masew x Nhatnguyen',
      path: './asset/audio/y2mate.com - Túy Âm  Xesi x Masew x Nhatnguyen.mp3',
      image: './asset/image/Túy Âm - Xesi x Masew x Nhatnguyen.jpg'
    },
    {
      name: 'Luôn Yêu Đời',
      singer: 'Đen Vâu',
      path: './asset/audio/y2mate.com - Đen  Luôn yêu đời ft Cheng MV.mp3',
      image: './asset/image/Luôn Yêu Đời.jpg'
    },
    {
      name: '莫叫姐姐',
      singer: 'Mạc Tỷ Tỷ',
      path: './asset/audio/y2mate.com - 莫叫姐姐  不該用情女聲版網友評論但凡粵語標準一點都唱不出這味道動態歌詞Lyrics.mp3',
      image: './asset/image/có lẽ kh nên đụng.jpg'
    },
  ],

  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
            <div class="listsongs ${index === this.currentIndex ? 'active-song' : ''}"data-index="${index}">
                <div class="list-name">
                    <img src="${song.image}" alt="" width="40px" height="40px" style="border-radius: 4px;">
                    <div class="name-singer">
                        <h2 class="info-song">${song.name}</h2>
                        <span class="info-singer">${song.singer}</span>
                    </div>
                </div>
                <div class="list-album">
                    ${song.name}
                    <span>(Single)</span>
                </div>
                <div class="list-time">
                    <h2><i class="fa-solid fa-heart"></i></h2>
                    <span class="info-duration">00:00</span>
                    <audio class="audio"  src="${song.path}"></audio>
                </div>
            </div>
            `
    });
    boxSong.innerHTML = htmls.join('');
    this.isRender = true;

    function formatTime(sec_num) {
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

      hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
    }
    const getAudio = $$('.audio');
    $$('.info-duration').forEach((elem, index) => {
      getAudio[index].onloadedmetadata = () => {
        elem.textContent = formatTime(getAudio[index].duration);
      };
    });
  },

  defineProperties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.songs[this.currentIndex];
      }
    })
  },

  handleEvents: function () {
    const _this = this;

    //Định đạng thời gian từ seconds
    function formatTime(sec_num) {
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

      hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
    }

    audio.ontimeupdate = () => {
      timeCurrent.textContent = formatTime(audio.currentTime);
      if (audio.duration) {
        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
        playhead.style.width = progressPercent + '%';
      }
    }

    audio.onloadedmetadata = () => {
      timeDuration.textContent = formatTime(audio.duration);
    }

    play.onclick = function () {
      play.style.display = 'none';
      pause.style.display = 'block';
      audio.play();

    }

    pause.onclick = function () {
      audio.pause();
      pause.style.display = 'none';
      play.style.display = 'block';

    }

    audio.onplay = () => {
      _this.isPlaying = !_this.isPlaying;
      imgPlayerAnimation.play();
      play.style.display = 'none';
      pause.style.display = 'block';
      getTitle.textContent = this.currentSong.name + " - " + this.currentSong.singer;
      document.querySelector('.listsongs.active-song').classList.remove('active-song');
      boxSong.children[_this.currentIndex].classList.add('active-song');
      _this.scrollToActiveSong();
    }
    audio.onpause = () => {
      _this.isPlaying = !_this.isPlaying;
      imgPlayerAnimation.pause();
      pause.style.display = 'none';
      play.style.display = 'block';
      document.querySelector('.listsongs.active-song').classList.remove('active-song');
      boxSong.children[_this.currentIndex].classList.add('active-song');
      _this.scrollToActiveSong();
    }

    // Lắng nghe hành vi click next audio
    nextRight.onclick = function () {
      if (_this.isRamdom) {
        _this.ramdomSong();
        audio.play();
      } else {
        _this.nextSong();
        audio.play();
      }
      document.querySelector('.listsongs.active-song').classList.remove('active-song');
      boxSong.children[_this.currentIndex].classList.add('active-song');
    }
    // Lắng nghe hành vi click prev audio
    nextLeft.onclick = function () {
      if (_this.isRamdom) {
        _this.ramdomSong();
        audio.play();
      } else {
        _this.prevSong();
        audio.play();
      }
      document.querySelector('.listsongs.active-song').classList.remove('active-song');
      boxSong.children[_this.currentIndex].classList.add('active-song');
    }

    audio.onended = function () {
      if (_this.isRepeat) {
        _this.repeatSong();
      } else if (_this.isRamdom) {
        _this.ramdomSong();
      }
      else if (audio.play) {
        _this.nextSong();
        play.style.display = 'none';
        pause.style.display = 'block';
      } else if (audio.pause) {
        _this.nextSong();
        pause.style.display = 'none';
        play.style.display = 'block';
      }
      document.querySelector('.listsongs.active-song').classList.remove('active-song');
      boxSong.children[_this.currentIndex].classList.add('active-song');
      audio.play();
    }

    // Lấy vị trí của playhead khi nhấp chuột và cập nhật playback time cho audio
    boxInput.onclick = (event) => {
      const timelineWidth = timeline.offsetWidth;
      const x = event.pageX - timeline.offsetLeft;
      var percent = (x / timelineWidth) * 100;
      var getClickTime = Math.floor((audio.duration * percent) / 100);
      audio.currentTime = getClickTime;
    }

    audioRepeat.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      audioRepeat.classList.toggle('active');
    };

    playRamdom.onclick = function () {
      _this.isRamdom = !_this.isRamdom;
      playRamdom.classList.toggle('active');
    };

    //Lắng nghe khi click vào list nhạc
    boxSong.onclick = function (e) {
      const songNode = e.target.closest('.listsongs:not(active-song)')
      if (songNode) {
        _this.currentIndex = Number(songNode.dataset.index);
        _this.loadCurrentSong();
        _this.render;
        audio.play();
      }
    }

    //Lắng nghe khi click vào nav menu
    $('.box-menu-li').onclick = e => {
      const menuNode = e.target.closest('.menu-li:not(active_nav)');
      if (menuNode) {
        if (menuNode.textContent == 'Cá Nhân') {
          $('.menu-li.active_nav').classList.remove('active_nav');
          menuNode.classList.add('active_nav');
          private.style.display = 'block';
          discover.style.display = 'none';
          popular.style.display = 'none';
          radio.style.display = 'none';
          follow.style.display = 'none';
        }
        else if (menuNode.textContent == 'Khám Phá') {
          $('.menu-li.active_nav').classList.remove('active_nav');
          menuNode.classList.add('active_nav');
          private.style.display = 'none';
          discover.style.display = 'block';
          popular.style.display = 'none';
          radio.style.display = 'none';
          follow.style.display = 'none';
        }
        else if (menuNode.textContent == '#zingchart') {
          $('.menu-li.active_nav').classList.remove('active_nav');
          menuNode.classList.add('active_nav');
          private.style.display = 'none';
          discover.style.display = 'none';
          popular.style.display = 'block';
          radio.style.display = 'none';
          follow.style.display = 'none';
        }
        else if (menuNode.textContent == 'Radio') {
          $('.menu-li.active_nav').classList.remove('active_nav');
          menuNode.classList.add('active_nav');
          private.style.display = 'none';
          discover.style.display = 'none';
          popular.style.display = 'none';
          radio.style.display = 'block';
          follow.style.display = 'none';
        }
        else if (menuNode.textContent == 'Theo Dõi') {
          $('.menu-li.active_nav').classList.remove('active_nav');
          menuNode.classList.add('active_nav');
          private.style.display = 'none';
          discover.style.display = 'none';
          popular.style.display = 'none';
          radio.style.display = 'none';
          follow.style.display = 'block';
        }
      }
    }

    //Chỉnh volume
    $('#input-volume').oninput = (e) => {
      const getValueVolume = e.target.value;
      audio.volume = getValueVolume;
      voloumeMove.style.width = getValueVolume * 100 + '%';
      if (e.target.value == 0) {
        volumeMax.style.display = 'none';
        volumeMin.style.display = 'block';
      } else if (e.target.value > 0) {
        volumeMax.style.display = 'block';
        volumeMin.style.display = 'none';
      }
    }

    //click on volume max
    volumeMax.onclick = function () {
      audio.volume = 0;
      volumeMax.style.display = 'none';
      volumeMin.style.display = 'block';
      voloumeMove.style.width = 0 + '%';
    }
    volumeMin.onclick = function () {
      audio.volume = 1;
      volumeMax.style.display = 'block';
      volumeMin.style.display = 'none';
      voloumeMove.style.width = 100 + '%';
    }

    //Sử lý CD quay / dừng
    const imgPlayerAnimation = imgPlayer.animate([
      { transform: 'rotate(360deg)' }
    ], {
      duration: 10000,
      iterations: Infinity
    })
    imgPlayerAnimation.pause()

    $('#view-play').onclick = e => {
      if (_this.isView) {
        _this.isView = false;
        $('#player').style.height = '25px';
        private.style.marginBottom = '100px';
      } else {
        _this.isView = true;
        $('#player').style.height = 360 + 'px';
        private.style.marginBottom = '380px';
      }
    }

    //Lắng nghe khi ấn nút bàn phím play pause next prev
    document.addEventListener('keydown', function (event) {
      event.preventDefault();
      $('#header').onkeydown = (e) => {
        e.stopPropagation();
      }
      // console.log(event.key)
      if (event.key === " ") {
        if (_this.isPlaying === false) {
          audio.play();
        } else if (_this.isPlaying === true) {
          audio.pause();
        }
      } else if (event.key === "ArrowRight") {
        _this.isPlaying = false;
        _this.nextSong();
        audio.play();
      } else if (event.key === "ArrowLeft") {
        _this.isPlaying = false;
        _this.prevSong();
        audio.play();
      }
    });
  },

  scrollToActiveSong: function () {
    setTimeout(() => {
      $('.listsongs.active-song').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }, 300)
  },

  loadCurrentSong: function () {
    infoSong.textContent = this.currentSong.name;
    infoSinger.textContent = this.currentSong.singer;
    imgPlayer.src = this.currentSong.image;
    audio.src = this.currentSong.path;
    // $('#background-image').src = this.currentSong.image;
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    var getLengIndex = this.songs.length;
    if (this.currentIndex == 0) {
      this.currentIndex = getLengIndex;
      this.currentIndex--;
    } else if (this.currentIndex != 0) {
      this.currentIndex--;
    }
    this.loadCurrentSong();
  },

  repeatSong: function () {
    this.currentIndex = this.currentIndex;
  },

  ramdomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  start: function () {
    this.defineProperties();
    this.loadCurrentSong();
    this.handleEvents();
    this.render();
  }
}

app.start()


function onAds() {
}

