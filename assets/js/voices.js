/* Long Horizon — what the people building this are actually saying.

   Updated roughly twice a week. Rules for anything added here, which exist
   because a misattributed quotation on a public site is a real harm:

     1. Every entry carries a source URL and the date of the statement.
        No source, no entry.
     2. Quote what was said, not what it was reported to mean. If the wording
        cannot be checked against a transcript, filing, recording or the
        speaker's own post, leave it out.
     3. `why` is this site's own reading, not the speaker's. Keep that line
        about what the statement implies for someone holding for decades —
        never a price view, never a recommendation.
     4. Newest first. Old entries stay: the record of what people said before
        an outcome was known is the most useful part of a page like this.

   The page renders from this file in all three languages, so an update
   touches this file alone.
*/

(function () {
  "use strict";

  var UPDATED = "2026-10-21";

  var LABEL = {
    en: { updated: "Last updated", source: "Source", why: "Why a long-horizon holder should care", empty: "No entries yet." },
    ja: { updated: "最終更新", source: "出典", why: "長期保有者にとっての意味", empty: "まだ項目がありません。" },
    ko: { updated: "마지막 업데이트", source: "출처", why: "장기 보유자에게 주는 의미", empty: "아직 항목이 없습니다." }
  };

  /* d = date of the statement (YYYY-MM-DD), t = quote, why = this site's reading */
  var VOICES = [
    {
      d: "2026-10-21",
      who: { en: "Tim Archer", ja: "ティム・アーチャー", ko: "팀 아처" },
      role: { en: "CEO, Lam Research", ja: "ラムリサーチ CEO", ko: "램리서치 CEO" },
      where: { en: "Earnings call, quarter ended September 2026", ja: "2026年9月期四半期 決算説明会", ko: "2026년 9월 분기 실적 발표" },
      url: "https://www.investing.com/news/transcripts/earnings-call-transcript-lam-research-tops-q1-2026-estimates-shares-fall-93CH-4964322",
      t: {
        en: "Our preliminary 2027 WFE outlook is for more than $200 billion of spending.",
        ja: "2027年のWFE(ウエハー製造装置)市場の暫定見通しは、2,000億ドル超の支出だ。",
        ko: "2027년 WFE(웨이퍼 제조 장비) 시장에 대한 잠정 전망은 2,000억 달러 이상의 지출이다."
      },
      why: {
        en: "This is the spending on chipmaking machines across the whole industry, up from the mid-$150 billions he expects for this year. It is the ASML and TSMC entries below turned into a number. A step that size is a forecast of the build-out continuing, made by a company paid when it does. The shares fell after hours on the results even so, which is a reminder that a bigger market and a better return on a share bought today are different claims.",
        ja: "これは業界全体の半導体製造装置への支出で、同氏が今年について見込む1,500億ドル台半ばから増える計算です。下のASMLとTSMCの項目を数字にしたものと言えます。これほどの伸びは建設が続くという予測であり、それが続けば収入を得る会社による予測です。それでも決算発表後の時間外取引で株価は下がりました。市場が大きくなることと、今日買った株のリターンが良くなることは別の主張だということを思い出させます。",
        ko: "이것은 업계 전체의 반도체 제조 장비 지출로, 그가 올해로 예상하는 1,500억 달러대 중반에서 늘어나는 셈입니다. 아래 ASML과 TSMC 항목을 숫자로 바꾼 것이라 할 수 있습니다. 이만한 증가는 건설이 계속된다는 예측이고, 그렇게 되면 돈을 버는 회사의 예측입니다. 그런데도 실적 발표 뒤 시간외 거래에서 주가는 떨어졌습니다. 시장이 커지는 것과 오늘 산 주식의 수익률이 좋아지는 것은 서로 다른 주장이라는 점을 일깨워 줍니다."
      }
    },
    {
      d: "2026-10-15",
      who: { en: "C.C. Wei", ja: "C.C. ウェイ(魏哲家)", ko: "C.C. 웨이" },
      role: { en: "Chairman and CEO, TSMC", ja: "TSMC 会長兼CEO", ko: "TSMC 회장 겸 CEO" },
      where: { en: "Q3 2026 earnings call", ja: "2026年第3四半期 決算説明会", ko: "2026년 3분기 실적 발표" },
      url: "https://www.fool.com/earnings/call-transcripts/2026/10/15/tsmc-tsm-q3-2026-earnings-call-transcript/",
      t: {
        en: "The demand actually is still far above our capability today to supply.",
        ja: "実のところ、需要はいまも当社の現在の供給能力を大きく上回っている。",
        ko: "사실 수요는 여전히 오늘날 우리의 공급 능력을 크게 웃돌고 있다."
      },
      why: {
        en: "Set it beside the Nvidia entry of 23 September below, where the buyer of these chips said supply and demand will one day invert. Here the maker says that day has not come. Both can be true. When asked on the same call how TSMC avoids overbuilding, Wei listed what it watches, including its customers' spending and power supply, rather than saying the risk was absent. A shortage is the moment capacity gets ordered, and capacity ordered in a shortage is what arrives after it.",
        ja: "下の9月23日のNvidiaの項目と並べて読んでください。チップの買い手はいつか需給が逆転すると言い、ここでは作り手がその日はまだ来ていないと言っています。どちらも成り立ちます。同じ説明会で過剰投資をどう避けるかと問われたウェイ氏は、リスクがないとは言わず、顧客の設備投資や電力供給など注視している項目を挙げました。品不足は設備が発注される瞬間であり、品不足のさなかに発注された設備は、品不足が終わった後に届きます。",
        ko: "아래 9월 23일 엔비디아 항목과 나란히 읽으십시오. 칩을 사는 쪽은 언젠가 수급이 뒤집힌다고 했고, 여기서 만드는 쪽은 그날이 아직 오지 않았다고 말합니다. 둘 다 사실일 수 있습니다. 같은 실적 발표에서 과잉 투자를 어떻게 피하느냐는 질문에 웨이는 위험이 없다고 하지 않고, 고객의 설비투자와 전력 공급 등 지켜보는 항목을 열거했습니다. 품귀는 설비가 발주되는 순간이고, 품귀 속에 발주된 설비는 품귀가 끝난 뒤에 도착합니다."
      }
    },
    {
      d: "2026-10-14",
      who: { en: "Christophe Fouquet", ja: "クリストフ・フーケ", ko: "크리스토프 푸케" },
      role: { en: "CEO, ASML", ja: "ASML CEO", ko: "ASML CEO" },
      where: { en: "Q3 2026 earnings call", ja: "2026年第3四半期 決算説明会", ko: "2026년 3분기 실적 발표" },
      url: "https://www.fool.com/earnings/call-transcripts/2026/10/14/asml-asml-q3-2026-earnings-call-transcript/",
      t: {
        en: "Customers are also expressing interest in placing orders for 2029 and even 2030.",
        ja: "顧客は2029年、さらには2030年向けの発注にも関心を示している。",
        ko: "고객들은 2029년, 심지어 2030년분 주문에도 관심을 보이고 있다."
      },
      why: {
        en: "ASML makes the machines that make the chips, so it sits furthest upstream of anyone on this page, and its order book is where a change in plans shows first. Interest in orders four years out says chipmakers expect the build-out to last. It is still interest, not orders, and an order placed in a shortage can be cancelled in a glut. The thing to watch in later quarters is whether that interest turns into bookings.",
        ja: "ASMLはチップを作る装置を作る会社で、このページの誰よりも上流にいます。計画の変化が最初に表れるのはこの会社の受注です。4年先の発注への関心は、半導体メーカーがこの建設が続くと見ていることを示します。ただしそれはまだ関心であって受注ではなく、品不足のときに出された注文は供給過剰になれば取り消されることもあります。今後の四半期で見るべきは、その関心が実際の受注に変わるかどうかです。",
        ko: "ASML은 칩을 만드는 장비를 만드는 회사로, 이 페이지의 누구보다 상류에 있습니다. 계획의 변화가 가장 먼저 드러나는 곳이 이 회사의 수주입니다. 4년 뒤 주문에 대한 관심은 반도체 업체들이 이 건설이 계속될 것으로 본다는 뜻입니다. 다만 아직은 관심일 뿐 주문이 아니며, 품귀 때 낸 주문은 공급 과잉이 오면 취소될 수도 있습니다. 앞으로의 분기에서 지켜볼 것은 그 관심이 실제 수주로 바뀌는지입니다."
      }
    },
    {
      d: "2026-10-13",
      who: { en: "Elon Musk", ja: "イーロン・マスク", ko: "일론 머스크" },
      role: { en: "CEO, SpaceX and Tesla", ja: "SpaceX・Tesla CEO", ko: "SpaceX·테슬라 CEO" },
      where: { en: "Post on X", ja: "X への投稿", ko: "X 게시물" },
      url: "https://www.benzinga.com/markets/tech/26/10/62347725/elon-musk-has-a-warning-for-ai-data-center-investors-says-funding-is-only-half-the-battle-spacex-has-a-super-cracked-team-even-we-find-it-very-difficult",
      t: {
        en: "Getting money to build complex hardware systems with massive power, cooling & networking is not the same as doing it.",
        ja: "巨大な電力・冷却・ネットワークを伴う複雑なハードウェアシステムを作るための資金を得ることは、それを実際にやり遂げることとは違う。",
        ko: "막대한 전력·냉각·네트워킹이 필요한 복잡한 하드웨어 시스템을 짓기 위해 돈을 마련하는 것은, 그것을 실제로 해내는 것과 같지 않다."
      },
      why: {
        en: "A builder's warning to the people funding the build. Money raised for a data centre is a promise; the electricity, cooling and equipment that make it earn are a separate test, passed or failed years later. For someone holding for decades, the useful habit is to judge this build-out by what is switched on and earning, not by what has been announced or financed.",
        ja: "建設する側から、資金を出す側への警告です。データセンターのために集めた資金は約束にすぎず、それを稼ぐ設備にする電力・冷却・機器は別の試験で、その合否が出るのは何年も後です。数十年単位で保有する人にとって役に立つのは、この建設を「発表された額」や「調達された額」ではなく、「実際に稼働して稼いでいるもの」で判断する習慣です。",
        ko: "짓는 쪽이 돈을 대는 쪽에 보내는 경고입니다. 데이터센터를 위해 모은 돈은 약속일 뿐이고, 그것을 돈 버는 설비로 만드는 전력·냉각·장비는 별개의 시험이며 그 결과는 몇 년 뒤에야 나옵니다. 수십 년을 보유하는 사람에게 유용한 습관은 이 건설을 '발표된 금액'이나 '조달된 금액'이 아니라 '실제로 가동되어 돈을 벌고 있는 것'으로 판단하는 것입니다."
      }
    },
    {
      d: "2026-10-06",
      who: { en: "Lisa Su", ja: "リサ・スー", ko: "리사 수" },
      role: { en: "CEO, AMD", ja: "AMD CEO", ko: "AMD CEO" },
      where: { en: "Speaking to reporters in Taipei", ja: "台北での記者団への発言", ko: "타이베이 기자단 발언" },
      url: "https://www.benzinga.com/markets/prediction-markets/26/10/62190764/amd-ai-demand-lisa-su-supply",
      t: {
        en: "We're going to substantially increase our supply in 2027, but we can definitely use more.",
        ja: "2027年には供給を大幅に増やすが、それでも、もっとあっても確実に使い切れる。",
        ko: "2027년에는 공급을 대폭 늘리겠지만, 그보다 더 있어도 분명히 다 쓸 수 있다."
      },
      why: {
        en: "Two months after saying demand was running above expectations (below), the constraint she names is supply, and the fix she names has a year on it. When the limit is how fast factories, memory and packaging can be built, the businesses that build them hold the scarce thing for now. Scarcity of that kind is also what invites the capacity that ends it, which is the other half of the next entry.",
        ja: "需要が想定を上回っていると語った2か月後(下)、彼女が挙げた制約は供給で、その解決策には「2027年」という年が付いています。上限が工場・メモリ・パッケージングを建てる速さで決まるなら、今のところ希少なものを握っているのはそれを建てる側です。ただし、そうした希少性こそが、それを終わらせる設備投資を呼び込みます。それが次の項目のもう半分です。",
        ko: "수요가 예상을 웃돈다고 말한 지 두 달 뒤(아래), 그가 든 제약은 공급이고 해법에는 '2027년'이라는 연도가 붙어 있습니다. 한계가 공장·메모리·패키징을 짓는 속도로 정해진다면, 지금 희소한 것을 쥐고 있는 쪽은 그것을 짓는 기업입니다. 다만 그런 희소성이야말로 그것을 끝낼 설비 투자를 불러들입니다. 그것이 다음 항목의 나머지 절반입니다."
      }
    },
    {
      d: "2026-09-23",
      who: { en: "Jensen Huang", ja: "ジェンスン・ファン", ko: "젠슨 황" },
      role: { en: "CEO, Nvidia", ja: "Nvidia CEO", ko: "엔비디아 CEO" },
      where: { en: "The Ezra Klein Show (podcast)", ja: "ポッドキャスト「The Ezra Klein Show」", ko: "팟캐스트 'The Ezra Klein Show'" },
      url: "https://finance.yahoo.com/technology/ai/articles/jensen-huang-says-ai-boom-132740720.html",
      t: {
        en: "At some point demand and supply will be inverted again. That's just the nature of markets.",
        ja: "いずれ需要と供給はまた逆転する。それが市場というものだ。",
        ko: "언젠가 수요와 공급은 다시 뒤집힌다. 그게 시장의 본성이다."
      },
      why: {
        en: "The rarest kind of statement on this page: the person with the most to lose from a downturn saying one will come. He put it two or three years out, and that timing is the part to check later. For someone holding for decades the date matters less than the shape. A shortage that turns into a glut is the ordinary cycle of every capital-intensive industry, and prices paid at the peak of the shortage are the ones that take longest to earn back.",
        ja: "このページで最も珍しい種類の発言です。下降局面で最も失うものが大きい人物が、それは来ると言っている。彼はそれを2〜3年先としており、後で確かめるべきはその時期です。数十年保有する人にとっては、時期よりも形のほうが重要です。品不足が供給過剰に変わるのは、あらゆる資本集約型産業のごく普通の循環であり、品不足のピークで払った価格ほど、取り戻すのに時間がかかります。",
        ko: "이 페이지에서 가장 드문 종류의 발언입니다. 하강 국면에서 잃을 것이 가장 많은 인물이 그것이 온다고 말하고 있습니다. 그는 그 시점을 2~3년 뒤로 잡았고, 나중에 확인할 것은 바로 그 시점입니다. 수십 년을 보유하는 사람에게는 시점보다 모양이 더 중요합니다. 품귀가 공급 과잉으로 바뀌는 것은 모든 자본집약 산업의 평범한 순환이며, 품귀의 정점에서 치른 가격일수록 되찾는 데 오래 걸립니다."
      }
    },
    {
      d: "2026-09-06",
      who: { en: "Jensen Huang", ja: "ジェンスン・ファン", ko: "젠슨 황" },
      role: { en: "CEO, Nvidia", ja: "Nvidia CEO", ko: "엔비디아 CEO" },
      where: { en: "Post on X", ja: "X への投稿", ko: "X 게시물" },
      url: "https://finance.yahoo.com/technology/ai/articles/jensen-huang-declares-agi-arrived-163016628.html",
      t: {
        en: "AGI has arrived.",
        ja: "AGIは到達した。",
        ko: "AGI는 도달했다."
      },
      why: {
        en: "Read it beside what the same person said on the earnings call eleven days earlier, below. A chief executive marketing his own hardware and a chief executive answering analysts are two different registers, and the gap between them is the most useful thing on this page.",
        ja: "11日前の決算説明会での同じ人物の発言(下)と並べて読んでください。自社ハードを売る立場での発言と、アナリストに答える立場での発言は別の言語です。そしてその落差こそが、このページで最も役に立つ情報です。",
        ko: "11일 전 실적 발표에서 같은 인물이 한 발언(아래)과 나란히 놓고 읽으십시오. 자사 하드웨어를 파는 자리에서의 발언과 애널리스트에게 답하는 자리에서의 발언은 다른 언어입니다. 그리고 그 격차가 이 페이지에서 가장 쓸모 있는 정보입니다."
      }
    },
    {
      d: "2026-08-26",
      who: { en: "Jensen Huang", ja: "ジェンスン・ファン", ko: "젠슨 황" },
      role: { en: "CEO, Nvidia", ja: "Nvidia CEO", ko: "엔비디아 CEO" },
      where: { en: "Q2 FY2027 earnings call", ja: "2027年度第2四半期 決算説明会", ko: "FY2027 2분기 실적 발표" },
      url: "https://explainx.ai/blog/jensen-huang-agi-has-arrived-gpt-6-astra-nvidia-september-2026",
      t: {
        en: "If we had more compute, we could generate more profitable tokens.",
        ja: "もっと計算資源があれば、もっと利益の出るトークンを生成できる。",
        ko: "연산 자원이 더 있다면, 더 수익성 있는 토큰을 생성할 수 있다."
      },
      why: {
        en: "This is the infrastructure argument stated by the person with the most to gain from it, which is a reason to check it rather than dismiss it. If compute is the binding constraint, the constraint behind compute is electricity — and that is a physical build-out with permitting queues and grid connections, not a software release cycle.",
        ja: "これは、その主張から最も利益を得る人物の口から出た「インフラ論」です。だからこそ退けるのではなく検証する価値があります。計算資源が制約なら、その計算資源の背後にある制約は電力です。そして電力は、ソフトウェアのリリースサイクルではなく、許認可待ちと系統接続を伴う物理的な建設です。",
        ko: "이것은 그 주장으로 가장 크게 이득을 보는 인물의 입에서 나온 '인프라 논리'입니다. 그래서 무시할 것이 아니라 검증할 가치가 있습니다. 연산이 제약이라면 그 연산 뒤의 제약은 전력이고, 전력은 소프트웨어 릴리스 주기가 아니라 인허가 대기와 계통 연결을 수반하는 물리적 건설입니다."
      }
    },
    {
      d: "2026-08-04",
      who: { en: "Lisa Su", ja: "リサ・スー", ko: "리사 수" },
      role: { en: "CEO, AMD", ja: "AMD CEO", ko: "AMD CEO" },
      where: { en: "Q2 2026 earnings call", ja: "2026年第2四半期 決算説明会", ko: "2026년 2분기 실적 발표" },
      url: "https://www.cnbc.com/2026/08/04/amd-earnings-report-q2-2026.html",
      t: {
        en: "Demand for both accelerators and CPUs is growing well above our prior expectations.",
        ja: "アクセラレータとCPUの双方で、需要は当社の従来想定を大きく上回って伸びている。",
        ko: "가속기와 CPU 양쪽 모두에서 수요가 기존 예상을 크게 웃돌며 성장하고 있다."
      },
      why: {
        en: "Note what it does not say. Demand running above expectations is a statement about revenue, not about the return on a share bought at today's price. AMD's revenue rose 50% and its data-centre sales doubled in the same quarter — and the stock fell on the day. That gap is the entire subject of this site.",
        ja: "言っていないことに注目してください。需要が想定を上回るのは売上の話であって、今日の株価で買った株のリターンの話ではありません。同じ四半期にAMDの売上は50%増、データセンター部門は倍増しました — そしてその日、株価は下落しました。この落差こそがこのサイトの主題そのものです。",
        ko: "말하지 않은 것에 주목하십시오. 수요가 예상을 웃도는 것은 매출의 이야기이지, 오늘의 주가에 산 주식의 수익률 이야기가 아닙니다. 같은 분기에 AMD의 매출은 50% 늘었고 데이터센터 매출은 두 배가 되었습니다 — 그리고 그날 주가는 떨어졌습니다. 이 간극이 이 사이트의 주제 그 자체입니다."
      }
    },
    {
      d: "2026-07-14",
      who: { en: "Mark Zuckerberg", ja: "マーク・ザッカーバーグ", ko: "마크 저커버그" },
      role: { en: "CEO, Meta", ja: "Meta CEO", ko: "메타 CEO" },
      where: { en: "On Meta's multi-gigawatt AI clusters", ja: "Metaのギガワット級AIクラスタについて", ko: "메타의 기가와트급 AI 클러스터에 대해" },
      url: "https://www.itpro.com/infrastructure/data-centres/meta-working-on-a-5gw-data-center-to-supercharge-ai-infrastructure-and-mark-zuckerberg-says-one-cluster-alone-covers-a-significant-part-of-the-footprint-of-manhattan",
      t: {
        en: "Just one of these covers a significant part of the footprint of Manhattan.",
        ja: "このうちのたった1つが、マンハッタンの面積のかなりの部分を覆う。",
        ko: "이 가운데 단 하나가 맨해튼 면적의 상당 부분을 덮는다."
      },
      why: {
        en: "The clearest statement that this build-out is physical. Land, transformers, turbines, water and transmission lines have lead times measured in years and cannot be accelerated by capital alone. That is what makes the suppliers of those things a different kind of exposure from the model companies — and also what makes them capital-intensive businesses with all the risks that carries.",
        ja: "この建設が物理的なものであることを最も明確に示した発言です。土地、変圧器、タービン、水、送電線のリードタイムは年単位で、資金だけでは短縮できません。だからこそ、それらを供給する側はモデル企業とは性質の違うエクスポージャーになります — そして同時に、資本集約型事業に固有のリスクを全部背負う商売でもあります。",
        ko: "이 건설이 물리적인 것임을 가장 분명하게 보여 준 발언입니다. 토지, 변압기, 터빈, 물, 송전선의 리드타임은 연 단위이고 자본만으로 단축되지 않습니다. 그래서 이것들을 공급하는 쪽은 모델 기업과는 성격이 다른 익스포저가 됩니다 — 동시에 자본집약적 사업 특유의 위험을 그대로 지는 장사이기도 합니다."
      }
    }
  ];

  function fmtDate(iso, lang) {
    var p = iso.split("-");
    if (lang === "ja") return p[0] + "年" + (+p[1]) + "月" + (+p[2]) + "日";
    if (lang === "ko") return p[0] + "년 " + (+p[1]) + "월 " + (+p[2]) + "일";
    var M = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];
    return M[+p[1] - 1] + " " + (+p[2]) + ", " + p[0];
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function render(root) {
    var lang = document.documentElement.lang || "en";
    if (!LABEL[lang]) lang = "en";
    var L = LABEL[lang];
    root.textContent = "";

    var stamp = el("p", "voices-updated", L.updated + ": " + fmtDate(UPDATED, lang));
    root.appendChild(stamp);

    if (!VOICES.length) {
      root.appendChild(el("p", "small", L.empty));
      return;
    }

    var list = el("div", "voices-list");
    VOICES.forEach(function (v) {
      var card = el("article", "voice");

      var head = el("div", "voice-head");
      head.appendChild(el("span", "voice-who", v.who[lang]));
      head.appendChild(el("span", "voice-role", v.role[lang]));
      head.appendChild(el("span", "voice-date", fmtDate(v.d, lang)));
      card.appendChild(head);

      var fig = el("figure");
      var bq = el("blockquote");
      bq.appendChild(el("p", "voice-text", "“" + v.t[lang] + "”"));
      if (lang !== "en") bq.appendChild(el("p", "voice-orig", "“" + v.t.en + "”"));
      fig.appendChild(bq);

      var cap = el("figcaption", "voice-src");
      cap.appendChild(document.createTextNode(v.where[lang] + " · "));
      var a = el("a", null, L.source);
      a.href = v.url;
      a.target = "_blank";
      a.rel = "noopener nofollow";
      cap.appendChild(a);
      fig.appendChild(cap);
      card.appendChild(fig);

      var why = el("div", "voice-why");
      why.appendChild(el("strong", null, L.why));
      why.appendChild(document.createTextNode(" " + v.why[lang]));
      card.appendChild(why);

      list.appendChild(card);
    });
    root.appendChild(list);
  }

  function init() {
    var root = document.getElementById("voices-root");
    if (root) render(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
