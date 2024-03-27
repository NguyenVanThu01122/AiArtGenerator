import { useEffect, useState } from "react";

const useCarouselScroll = (carouselSelector: string) => {
  const [isScrollAtStart, setIsScrollAtStart] = useState(true);
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  const handleScrollCarousel = (distance: number) => {
    const carousel = document.querySelector(carouselSelector);
    if (carousel) {
      carousel.scrollBy({
        left: distance, // khoảng cách cuộn theo chiều ngang
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = document.querySelector(carouselSelector);
    //hàm updateScrollStatus để cập nhật trạng thái cuộn
    const updateScrollStatus = () => {
      if (carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel; // Lấy thông tin về vị trí cuộn, chiều rộng cuộn và chiều rộng của khu vực nhìn thấy
        // Cập nhật trạng thái của việc cuộn tới đầu và cuộn tới cuối
        setIsScrollAtStart(scrollLeft === 0);
        setIsScrollAtEnd(scrollLeft === scrollWidth - clientWidth);
      }
    };
    carousel?.addEventListener("scroll", updateScrollStatus); // Thêm sự kiện scroll cho carousel để cập nhật trạng thái cuộn
    return () => carousel?.removeEventListener("scroll", updateScrollStatus); // Xóa sự kiện scroll khi component unmount để tránh memory leak
  }, [isScrollAtStart, isScrollAtEnd, carouselSelector]);

  return { handleScrollCarousel, isScrollAtStart, isScrollAtEnd };
};

export default useCarouselScroll;
