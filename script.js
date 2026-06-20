/**
 * ============================================================
 *  LỤA VẠN PHÚC - Di sản Lụa Việt Nam
 *  Tập tin JavaScript chính
 * ============================================================
 *  Tính năng:
 *    1. Header thay đổi khi cuộn trang
 *    2. Cuộn mượt khi nhấn liên kết điều hướng
 *    3. Menu di động (mobile menu)
 *    4. Hiệu ứng xuất hiện khi cuộn (Scroll Reveal)
 *    5. Hiệu ứng dòng thời gian (Timeline Animation)
 *    6. Hỗ trợ cảm ứng cho thẻ hoa văn
 *    7. Nút quay lại đầu trang
 *    8. Đánh dấu liên kết điều hướng đang hoạt động
 *    9. Hiệu ứng đếm số
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ============================================================
  //  1. HEADER THAY ĐỔI KHI CUỘN TRANG
  //  Khi người dùng cuộn xuống quá 80px, thêm class 'scrolled'
  //  vào phần tử .header để chuyển từ nền trong suốt sang nền đặc.
  // ============================================================

  const header = document.querySelector('.header');

  /** Ngưỡng cuộn (pixel) để kích hoạt hiệu ứng header */
  const HEADER_SCROLL_THRESHOLD = 80;

  const handleHeaderScroll = () => {
    if (!header) return;

    if (window.scrollY > HEADER_SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Gọi ngay khi tải trang (phòng trường hợp trang được tải ở vị trí cuộn)
  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });


  // ============================================================
  //  2. CUỘN MƯỢT KHI NHẤN LIÊN KẾT ĐIỀU HƯỚNG
  //  Tất cả liên kết có href bắt đầu bằng '#' sẽ cuộn mượt
  //  tới phần tử mục tiêu. Sau khi nhấn, đóng menu di động.
  // ============================================================

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');

      // Bỏ qua liên kết rỗng hoặc chỉ có ký tự '#'
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      // Tính toán vị trí cuộn, trừ đi chiều cao header để không bị che
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top
        + window.pageYOffset
        - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // Đóng menu di động sau khi nhấn liên kết
      closeMobileMenu();
    });
  });


  // ============================================================
  //  3. MENU DI ĐỘNG (MOBILE MENU)
  //  Nút .menu-toggle bật/tắt class 'active' trên .nav-menu
  //  và trên chính nó (để tạo hiệu ứng hamburger → X).
  //  Đóng menu khi nhấn bên ngoài hoặc nhấn vào liên kết.
  // ============================================================

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  /**
   * Đóng menu di động
   * Xóa class 'active' khỏi cả nút toggle và menu
   */
  const closeMobileMenu = () => {
    if (menuToggle) menuToggle.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
  };

  /**
   * Mở/đóng menu di động
   */
  const toggleMobileMenu = () => {
    if (menuToggle) menuToggle.classList.toggle('active');
    if (navMenu) navMenu.classList.toggle('active');
  };

  // Gắn sự kiện nhấn cho nút toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Ngăn sự kiện lan ra document
      toggleMobileMenu();
    });
  }

  // Đóng menu khi nhấn bên ngoài
  document.addEventListener('click', (e) => {
    if (!navMenu || !navMenu.classList.contains('active')) return;

    // Kiểm tra xem nhấn có nằm ngoài menu và nút toggle không
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnToggle = menuToggle && menuToggle.contains(e.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      closeMobileMenu();
    }
  });

  // Đóng menu khi nhấn phím Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });


  // ============================================================
  //  4. HIỆU ỨNG XUẤT HIỆN KHI CUỘN (SCROLL REVEAL)
  //  Sử dụng IntersectionObserver để theo dõi các phần tử có
  //  class .fade-in-up, .fade-in-left, .fade-in-right.
  //  Khi phần tử vào viewport → thêm class 'visible'.
  // ============================================================

  const revealElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right'
  );

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Ngừng theo dõi phần tử đã xuất hiện (tối ưu hiệu suất)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,            // Kích hoạt khi 15% phần tử hiển thị
        rootMargin: '0px 0px -50px 0px', // Kích hoạt sớm hơn 50px từ dưới
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }


  // ============================================================
  //  5. HIỆU ỨNG DÒNG THỜI GIAN (TIMELINE ANIMATION)
  //  Khi các mục trong dòng thời gian xuất hiện, tạo hiệu ứng
  //  lần lượt với độ trễ tăng dần. Sử dụng CSS custom property
  //  --delay để điều khiển thời gian trễ cho mỗi mục.
  // ============================================================

  const timelineItems = document.querySelectorAll('.timeline-item');

  if (timelineItems.length > 0) {
    /** Độ trễ tăng dần giữa các mục (mili-giây) */
    const STAGGER_DELAY_MS = 150;

    // Đặt biến CSS --delay cho từng mục dựa trên chỉ số
    timelineItems.forEach((item, index) => {
      item.style.setProperty('--delay', `${index * STAGGER_DELAY_MS}ms`);
      // Cũng đặt transition-delay trực tiếp để đảm bảo tương thích
      item.style.transitionDelay = `${index * STAGGER_DELAY_MS}ms`;
    });

    const timelineObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    timelineItems.forEach((item) => timelineObserver.observe(item));
  }


  // ============================================================
  //  6. HỖ TRỢ CẢM ỨNG CHO THẺ HOA VĂN (PATTERN CARDS)
  //  Trên thiết bị cảm ứng, chuyển hiệu ứng hover thành
  //  bật/tắt khi chạm (tap) thay vì hover.
  // ============================================================

  const patternCards = document.querySelectorAll('.pattern-card');

  /**
   * Kiểm tra thiết bị có hỗ trợ cảm ứng không
   * @returns {boolean}
   */
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  if (patternCards.length > 0 && isTouchDevice()) {
    patternCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        // Nếu đang nhấn vào liên kết bên trong thẻ, cho phép hành vi mặc định
        if (e.target.closest('a')) return;

        // Đóng tất cả thẻ khác trước khi mở thẻ hiện tại
        patternCards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.remove('hover');
          }
        });

        // Bật/tắt trạng thái hover cho thẻ được nhấn
        card.classList.toggle('hover');
      });
    });

    // Đóng tất cả thẻ khi nhấn bên ngoài
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.pattern-card')) {
        patternCards.forEach((card) => card.classList.remove('hover'));
      }
    });
  }


  // ============================================================
  //  7. HOTSPOT TƯƠNG TÁC TRÊN HÌNH KHUNG CỬI
  //  Khi hover, focus hoặc chạm vào hotspot, hiển thị tooltip
  //  mô tả bộ phận và công dụng của bộ phận đó.
  // ============================================================

  const loomHotspots = document.querySelectorAll('[data-hotspot-panel] .loom-hotspot');

  if (loomHotspots.length > 0) {
    const hideTimers = new WeakMap();

    const closeLoomHotspots = (exceptHotspot = null) => {
      loomHotspots.forEach((hotspot) => {
        if (hotspot !== exceptHotspot) {
          hotspot.classList.remove('active');
          if (hideTimers.has(hotspot)) {
            clearTimeout(hideTimers.get(hotspot));
            hideTimers.delete(hotspot);
          }
        }
      });
    };

    const showLoomHotspot = (hotspot) => {
      if (hideTimers.has(hotspot)) {
        clearTimeout(hideTimers.get(hotspot));
        hideTimers.delete(hotspot);
      }
      closeLoomHotspots(hotspot);
      hotspot.classList.add('active');
    };

    const hideLoomHotspot = (hotspot, delay = 0) => {
      if (hideTimers.has(hotspot)) {
        clearTimeout(hideTimers.get(hotspot));
      }

      const timer = setTimeout(() => {
        hotspot.classList.remove('active');
        hideTimers.delete(hotspot);
      }, delay);

      hideTimers.set(hotspot, timer);
    };

    loomHotspots.forEach((hotspot) => {
      hotspot.addEventListener('mouseenter', () => showLoomHotspot(hotspot));
      hotspot.addEventListener('mouseleave', () => hideLoomHotspot(hotspot));

      hotspot.addEventListener('focus', () => showLoomHotspot(hotspot));
      hotspot.addEventListener('blur', () => hideLoomHotspot(hotspot));

      hotspot.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse') {
          showLoomHotspot(hotspot);
        }
      });

      hotspot.addEventListener('pointerup', (e) => {
        if (e.pointerType !== 'mouse') {
          hideLoomHotspot(hotspot, 650);
        }
      });

      hotspot.addEventListener('pointercancel', () => hideLoomHotspot(hotspot));

      hotspot.addEventListener('touchstart', () => showLoomHotspot(hotspot), { passive: true });
      hotspot.addEventListener('touchend', () => hideLoomHotspot(hotspot, 650), { passive: true });

      hotspot.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      hotspot.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          hideLoomHotspot(hotspot);
          hotspot.blur();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-hotspot-panel]')) {
        closeLoomHotspots();
      }
    });
  }


  // ============================================================
  //  8. NÚT QUAY LẠI ĐẦU TRANG (BACK TO TOP)
  //  Hiển thị nút khi người dùng cuộn xuống quá 600px.
  //  Nhấn nút sẽ cuộn mượt lên đầu trang.
  // ============================================================

  const backToTopBtn = document.querySelector('#back-to-top');

  /** Ngưỡng cuộn (pixel) để hiển thị nút quay lại đầu trang */
  const BACK_TO_TOP_THRESHOLD = 600;

  const handleBackToTopVisibility = () => {
    if (!backToTopBtn) return;

    if (window.scrollY > BACK_TO_TOP_THRESHOLD) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  // Gọi ngay khi tải trang
  handleBackToTopVisibility();
  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }


  // ============================================================
  //  8. ĐÁNH DẤU LIÊN KẾT ĐIỀU HƯỚNG ĐANG HOẠT ĐỘNG
  //  Khi người dùng cuộn qua các phần (section), đánh dấu
  //  liên kết điều hướng tương ứng bằng class 'active'.
  // ============================================================

  const sections = document.querySelectorAll('section[id]');

  const handleActiveNavHighlight = () => {
    if (sections.length === 0) return;

    const scrollPosition = window.scrollY;
    const headerOffset = header ? header.offsetHeight : 0;

    // Biến lưu id của section đang hiển thị
    let currentSectionId = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - headerOffset - 100; // Thêm vùng đệm
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // Nếu cuộn đến gần cuối trang, chọn section cuối cùng
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
      const lastSection = sections[sections.length - 1];
      if (lastSection) {
        currentSectionId = lastSection.getAttribute('id');
      }
    }

    // Cập nhật class 'active' cho liên kết tương ứng
    navLinks.forEach((link) => {
      link.classList.remove('active');

      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  handleActiveNavHighlight();
  window.addEventListener('scroll', handleActiveNavHighlight, { passive: true });


  // ============================================================
  //  9. HIỆU ỨNG ĐẾM SỐ (COUNTER ANIMATION)
  //  Khi phần tử có class .counter vào viewport, đếm số
  //  từ 0 đến giá trị mục tiêu (lưu trong data-target).
  // ============================================================

  const counters = document.querySelectorAll('.counter');

  /**
   * Tạo hiệu ứng đếm số từ 0 đến giá trị mục tiêu
   * Sử dụng requestAnimationFrame cho hiệu ứng mượt mà
   *
   * @param {HTMLElement} counterEl - Phần tử hiển thị số
   */
  const animateCounter = (counterEl) => {
    const target = parseInt(counterEl.getAttribute('data-target'), 10);

    // Kiểm tra giá trị mục tiêu hợp lệ
    if (isNaN(target) || target <= 0) {
      counterEl.textContent = counterEl.getAttribute('data-target') || '0';
      return;
    }

    /** Thời gian hoàn thành hiệu ứng đếm (mili-giây) */
    const ANIMATION_DURATION = 2000;

    const startTime = performance.now();

    /**
     * Hàm cập nhật số theo từng khung hình
     * Sử dụng hàm easeOutQuart để tạo hiệu ứng chậm dần
     */
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / ANIMATION_DURATION, 1);

      // Hàm easeOutQuart: bắt đầu nhanh, chậm dần về cuối
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOut * target);

      counterEl.textContent = currentValue.toLocaleString('vi-VN');

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        // Đảm bảo hiển thị đúng giá trị cuối cùng
        counterEl.textContent = target.toLocaleString('vi-VN');
      }
    };

    requestAnimationFrame(updateCounter);
  };

  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Kích hoạt khi 50% phần tử hiển thị
      }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }


  // ============================================================
  //  TỐI ƯU HIỆU SUẤT: GỘP SỰ KIỆN CUỘN
  //  Không cần thiết vì trình duyệt hiện đại đã tối ưu
  //  scroll event với passive listener, nhưng ghi chú lại
  //  để tham khảo khi cần mở rộng.
  // ============================================================

  // Ghi chú: Tất cả scroll listener đã sử dụng { passive: true }
  // để đảm bảo hiệu suất cuộn trang tối ưu.

});
