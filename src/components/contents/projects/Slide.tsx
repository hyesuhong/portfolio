import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { slideContainer, slideImage } from './projects.css';
import { projectURL } from './DataList';
import { Autoplay } from 'swiper/modules';

interface ISlide {
	images: projectURL[];
}

export default function Slide({ images }: ISlide) {
	return (
		<>
			<div className={slideContainer}>
				<Swiper
					speed={500}
					autoplay={{
						delay: 2000,
						pauseOnMouseEnter: true,
						disableOnInteraction: false,
					}}
					loop={true}
					modules={[Autoplay]}
					style={{ height: '100%' }}
				>
					{images.map((img, index) => {
						const imgUrl = new URL(
							`../../../assets/projects/${img.url}`,
							import.meta.url
						).href;
						return (
							<SwiperSlide key={index}>
								<img src={imgUrl} alt={img.title} className={slideImage} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
}
