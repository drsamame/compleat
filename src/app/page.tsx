import Detail from './components/Detail';
import MainBanner from './components/MainBanner';
import SecondaryBanner from './components/SecondaryBanner';
import Services from '@/app/components/Services';
import Testimonial from '@/components/Testimonial';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<section className="container mt-6">
				<MainBanner />
				<SecondaryBanner />
				<Detail />
			</section>
			<Services />
			<Testimonial />
			<JoinUs />
			<Footer />
		</>
	);
}
