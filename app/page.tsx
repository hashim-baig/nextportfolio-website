import HeroDisplayPic from '@/components/molecules/HeroDisplayPic';
import AboutSection from '@/components/organisms/AboutSection';
import HeroGreetingSection from '@/components/organisms/HeroGreetingSection';

export default function Home() {
    return (
        <>
            <HeroDisplayPic />
            <HeroGreetingSection />
            <AboutSection />
        </>
    );
}
