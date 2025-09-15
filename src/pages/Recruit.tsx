import Header from '@/components/common/Header.tsx'
import Footer from '@/components/common/Footer.tsx'
import RecruitCard from '@/components/recruit/RecruitCard.tsx'

export default function Recruit() {
  return (
    <main>
      <Header />
      <section className="grid grid-cols-2 gap-5">
        <RecruitCard companyImage={'/vacatio.png'} deadline={'채용시 마감'} companyName={'바카티오'} jobTitle={'Impact Junior'} requirements={'경력 무관 · 학력 무관'} views={'7115'}/>
        <RecruitCard companyImage={'/vacatio.png'} deadline={'채용시 마감'} companyName={'바카티오'} jobTitle={'Sr.Data Engineer(Platform Biz Intelligence)'} requirements={'경력 무관 · 학력  무관'} views={'7115'}/>
        <RecruitCard companyImage={'/vacatio.png'} deadline={'채용시 마감'} companyName={'바카티오'} jobTitle={'Impact Junior'} requirements={'경력 무관 · 학력 무관'} views={'7115'}/>
        <RecruitCard companyImage={'/vacatio.png'} deadline={'채용시 마감'} companyName={'바카티오'} jobTitle={'Impact Junior'} requirements={'경력 무관 · 학력 무관'} views={'7115'}/>

      </section>
      <Footer />
    </main>
  )
}
