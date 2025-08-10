import HeroDisplayPic from '@/components/molecules/HeroDisplayPic';
import AboutSection from '@/components/organisms/AboutSection';
import HeroGreetingSection from '@/components/organisms/HeroGreetingSection';
import SkillsSection from '@/components/organisms/SkillsSection';
import ExperienceSection from '@/components/organisms/ExperienceSection';

export default function Home() {
    return (
        <>
            <HeroDisplayPic />
            <HeroGreetingSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
        </>
    );
}
