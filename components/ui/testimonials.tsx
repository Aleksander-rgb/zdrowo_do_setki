import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Adrianna",
    role: "Uczestniczka programu",
    avatar: "AD",
    avatarImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: `Ja się czuję Beata bardzo dobrze, chciałam Ci bardzo podziękować za tą opiekę, ogrom wiedzy jaką od Ciebie dostałam, wskazówki które zmieniły moje podejście do odżywiania i samopoczucia 🥰 Waga mi zleciała 3 kg, jeżeli chodzi o obwody to też straciłam kilka cm w biodrach i udach, widzę to po ubraniach! Nie mam takich napadów na jedzenie jak miałam wcześniej, nie mam migren, mam więcej siły. Generalnie czuję się o wieeeele lepiej w porównaniu do tego co było przed rozpoczęciem współpracy z Tobą 🫶🏻`,
    featured: true,
  },
  {
    name: "Monika",
    role: "Uczestniczka programu",
    avatar: "MO",
    avatarImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: `Z całego serca polecam współpracę z Beatą 🥰. To 3 miesiące przemiany nie tylko w kwestii zdrowego odżywiania ale także i przemiany mentalnej. Dzięki Beacie dowiedziałam się co jeść i kiedy to jeść by chudnąć i czuć się odżywioną i pełną energii. Polecam każdej kobiecie która już nie chce po raz dziesiąty iść do dietetyka, który ułoży jadłospis z którego na dłuższą metę i tak nic nie wynika. Dziękuję Beata za cierpliwość, motywację i mądre doradztwo ❤️`,
    featured: true,
  },
  {
    name: "Jacek",
    role: "Uczestnik programu",
    avatar: "JA",
    avatarImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: `Twoje rady doprowadziły do tego, że w ciągu kilku miesięcy waga spadła mi o blisko 20 kg, co w moim wieku (ponad 50) jest nie lada wyzwaniem. Nie narzuciłaś mi jakiejś konkretnej diety, tylko nauczyłaś mnie myśleć kreatywnie na temat zasad odżywiania. Wielkie dzięki!`,
  },
  {
    name: "Marta",
    role: "Uczestniczka programu",
    avatar: "MA",
    avatarImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    text: `Współpraca z Beatą na zawsze zmieniła moje nawyki żywieniowe oraz uporządkowała i znacząco pogłębiła moją dotychczasową wiedzę na temat zdrowego stylu życia ❤️ Holistyczne podejście pozwoliło mi zdobyć wszystkie niezbędne narzędzia, dzięki którym mogę dziś w prosty i świadomy sposób samodzielnie dbać o swoje zdrowie 🥰`,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28" style={{ background: "#f8f5f0" }}>
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#71BFA7" }}>
            Opinie uczestników
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl" style={{ color: "#031F42" }}>
            Prawdziwe efekty,<br />prawdziwi ludzie
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#696969" }}>
            Co mówią osoby, które przeszły przez program Beaty Janickiej.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Featured — Adrianna (large) */}
          <Card className="grid grid-rows-[auto_1fr] gap-6 sm:col-span-2 sm:p-6 lg:row-span-2" style={{ borderColor: "rgba(113,191,167,0.3)", background: "white" }}>
            <CardHeader className="pb-0">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#FFC221" }}>★</span>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-base font-medium leading-relaxed" style={{ color: "#031F42" }}>
                  &ldquo;{testimonials[0].text}&rdquo;
                </p>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={testimonials[0].avatarImg} alt={testimonials[0].name} />
                    <AvatarFallback style={{ background: "#71BFA7", color: "white" }}>{testimonials[0].avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-semibold not-italic" style={{ color: "#031F42" }}>{testimonials[0].name}</cite>
                    <span className="block text-xs" style={{ color: "#696969" }}>{testimonials[0].role}</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Featured — Monika (wide) */}
          <Card className="md:col-span-2" style={{ borderColor: "rgba(113,191,167,0.2)", background: "white" }}>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#FFC221" }}>★</span>
                    ))}
                  </div>
                  <p className="text-base font-medium leading-relaxed" style={{ color: "#031F42" }}>
                    &ldquo;{testimonials[1].text}&rdquo;
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={testimonials[1].avatarImg} alt={testimonials[1].name} />
                    <AvatarFallback style={{ background: "#71BFA7", color: "white" }}>{testimonials[1].avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-semibold not-italic" style={{ color: "#031F42" }}>{testimonials[1].name}</cite>
                    <span className="block text-xs" style={{ color: "#696969" }}>{testimonials[1].role}</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Jacek */}
          <Card style={{ borderColor: "rgba(113,191,167,0.2)", background: "white" }}>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#FFC221" }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#031F42" }}>
                    &ldquo;{testimonials[2].text}&rdquo;
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={testimonials[2].avatarImg} alt={testimonials[2].name} />
                    <AvatarFallback style={{ background: "#71BFA7", color: "white" }}>{testimonials[2].avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-semibold not-italic" style={{ color: "#031F42" }}>{testimonials[2].name}</cite>
                    <span className="block text-xs" style={{ color: "#696969" }}>{testimonials[2].role}</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Marta */}
          <Card style={{ borderColor: "rgba(113,191,167,0.2)", background: "white" }}>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#FFC221" }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#031F42" }}>
                    &ldquo;{testimonials[3].text}&rdquo;
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={testimonials[3].avatarImg} alt={testimonials[3].name} />
                    <AvatarFallback style={{ background: "#71BFA7", color: "white" }}>{testimonials[3].avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-semibold not-italic" style={{ color: "#031F42" }}>{testimonials[3].name}</cite>
                    <span className="block text-xs" style={{ color: "#696969" }}>{testimonials[3].role}</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
