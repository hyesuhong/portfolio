import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { projectURL } from './DataList';
import * as S from '../../../styles/projects.css';

interface ISlide {
	images: projectURL[];
}

export default function Slide({ images }: ISlide) {
	return (
		<>
			<div className={S.slideContainer}>
				<Swiper
					speed={500}
					autoplay={{
						delay: 2000,
						pauseOnMouseEnter: true,
						disableOnInteraction: false,
					}}
					loop={images.length > 1}
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
								<img src={imgUrl} alt={img.title} className={S.slideImage} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
}
