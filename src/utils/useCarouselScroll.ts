import { useEffect, useState } from 'react'

const useCarouselScroll = (carouselSelector: string) => {
  const [isScrollAtStart, setIsScrollAtStart] = useState(true)
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false)
  const carousel = document.querySelector(carouselSelector)

  const handleScrollCarousel = (distance: number) => {
    if (carousel) {
      let start: number | null = null
      let currentScrollLeft = carousel.scrollLeft

      const step = (timestamp: number) => {
        if (!start) start = timestamp // Lấy thời gian bắt đầu cuộn
        const progress = timestamp - start // Tính thời gian đã cuộn
        const percent = Math.min(progress / 500, 1) // 500ms to scroll

        carousel.scrollLeft = currentScrollLeft + distance * percent

        if (percent < 1) {
          window.requestAnimationFrame(step) // Nếu chưa cuộn hết thì gọi lại hàm step
        }
      }
      window.requestAnimationFrame(step) // Gọi hàm step để cuộn carousel
    }
  }

  useEffect(() => {
    //hàm updateScrollStatus để cập nhật trạng thái cuộn
    const updateScrollStatus = () => {
      if (carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel // Lấy thông tin về vị trí cuộn, chiều rộng cuộn và chiều rộng của khu vực nhìn thấy
        // Cập nhật trạng thái của việc cuộn tới đầu và cuộn tới cuối
        setIsScrollAtStart(scrollLeft === 0)
        setIsScrollAtEnd(scrollLeft === scrollWidth - clientWidth)
      }
    }
    carousel?.addEventListener('scroll', updateScrollStatus) // Thêm sự kiện scroll cho carousel để cập nhật trạng thái cuộn
    return () => carousel?.removeEventListener('scroll', updateScrollStatus) // Xóa sự kiện scroll khi component unmount để tránh memory leak
  }, [isScrollAtStart, isScrollAtEnd, carouselSelector, carousel])

  return { handleScrollCarousel, isScrollAtStart, isScrollAtEnd }
}

export default useCarouselScroll
