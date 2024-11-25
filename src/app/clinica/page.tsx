import ClinicBanner from '@/app/components/ClinicBanner';
import Personal from '@/app/components/Personal';
import OurService from '../components/OurService';
import JoinUs from '@/components/JoinUs';

function Clinic() {
	return (
		<>
			<section className="container mt-6">
				<ClinicBanner />

				<div className="max-w-[1120px] mx-auto">
					<h2 className="mb-12 max-w-[738px] mx-auto text-center text-base text-40-regular !leading-[48px]">
						¿Deseas asesoría con unos de nuestros especialistas?
					</h2>
				</div>

				<div className="max-w-[1120px] mx-auto"></div>
			</section>
			<Personal
				image="/images/flavio.webp"
				title="Flavio Quincot"
				description="Un coach de nutrición es un profesional que ayuda a las personas a
						mejorar sus hábitos alimenticios y estilo de vida. Ofrece
						asesoramiento personalizado, crea planes de alimentación adaptados a
						las necesidades y metas individuales, y brinda apoyo motivacional."
				phrase="&ldquo;Eres más fuerte de lo que piensas.&rdquo;"
				link="/"
				igLink="@flavioquincot"
				type="a"
			/>
			<Personal
				image="/images/ana.webp"
				title="Ana Carina Rubio"
				description="Un coach de nutrición es un experto que asesora a las personas en la creación de hábitos alimenticios saludables y sostenibles. Trabaja de manera individual para diseñar planes de alimentación que se adapten a las necesidades y objetivos específicos de cada cliente."
				phrase="&ldquo;Eres más fuerte de lo que piensas.&rdquo;"
				link="/"
				igLink="@anarubioperu"
				type="b"
			/>
			<div className="max-w-[1180px] px-8 mx-auto">
				<OurService />
				<JoinUs />
			</div>
		</>
	);
}

export default Clinic;
