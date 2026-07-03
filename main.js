/* ==========================================================================
   i18n Language Toggle System
   ========================================================================== */
const translations = {
  ja: {
    nav_home:        "Home",
    nav_about:       "About & Skills",
    nav_about_short: "About",
    nav_works:       "Works",
    nav_events:      "イベント実績",
    nav_recent:      "趣味",
    nav_contact:     "お問い合わせ",
    hero_badge:      "GAME PLANNER / ゲームプランナー",
    hero_title:      "<span class='title-line'>発想力で世界を沸かせたい！</span><br><span class='title-line'>ゲームプランナー！</span>",
    hero_desc:       "ゲームの面白さを設計・言語化し、プレイヤーが思わず没頭してしまうような<br>体験づくりに情熱を注いでいます。企画立案からレベルデザイン<br>仕様書作成まで、ゲームの「楽しさ」を追求します。",
    hero_btn_works:  "作品を見る",
    hero_btn_about:  "自己紹介",
    hero_btn_recent: "最近の動向",
    about_title_sub: "自己紹介",
    about_lead:      "チーム制作、個人制作で修行中！",
    about_p1:        "「面白い」とは何かを考え、遊んでもらうすべての方々にゲームの楽しさを<br>知ってもらうために動きます！",
    about_p2:        "仕様書や企画書も見やすく、読み手に楽しんでもらう事を意識しています！",
    about_doc_title: "企画書",
    about_doc_desc:  "企画の面白さを伝えるために世界観をしっかり書き、目に入りやすいレイアウトを意識しています",
    about_spec_title: "仕様書",
    about_spec_desc:  "仕様を伝えるために分かりやすく見やすいデザインで制作しています<br>特にレベルデザインに力を入れており狙いも同時に書いています",
    about_ach_title: "🏆 実績",
    about_ach1:      "BSGJ2026審査員賞、審査員賞「Yolk you」",
    about_ach1_role: "（仕様書、レベルデザイン、プランナー担当）",
    view_yolk_you: "作品を見る：Yolk you",
    about_ach_bubble: "チームに感謝！",
    about_meta_school:   "デジタルゲーム学系 ゲーム学科 2回生（2029年卒業予定）",
    about_meta_club:     "ゲーム制作サークルハイミント副部長",
    about_school_label: "学校名:",
    about_school:    "京都コンピュータ学院京都駅前校",
    about_role_label:"志望職種:",
    about_role:      "ゲームプランナー",
    hobbies_title:   "🎯 趣味 / Hobbies",
    hobby1_tag:      "MAHJONG",
    hobby1_desc:     "<span class='hobby-line'>頭脳戦と確率のゲーム！役づくりと押し引きの戦略を考えるのが大好きです。</span><br><span class='hobby-line'>大人の方と会話するいい機会なので言葉遣いやコミュニケーション能力を高めています！</span>",
    hobby2_tag:      "MY CAT",
    hobby2_desc:     "<span class='hobby-line'>癒しの相棒。お家でまったり過ごすときの最高のパートナーです。</span><br><span class='hobby-line'>企画で行き詰った時に遊びリフレッシュしています！</span>",
    hobby3_tag:      "RAMEN",
    hobby3_desc:     "<span class='hobby-line'>濃厚な家系ラーメンが好物！美味しいお店の開拓が日課です。</span><br><span class='hobby-line'>美味しさの為なら何処へでも行ける情熱と行動力があります！</span>",
    hobby4_tag:      "GAME & GOODS",
    hobby4_desc:     "<span class='hobby-line'>好きなゲーム作品のグッズやフィギュアをコレクションして楽しんでいます。</span><br><span class='hobby-line'>インプットとして残し制作する時に使える物はないかと考えています！</span>",
    skills_title_sub:"スキル・使用ツール",
    skill_planning_title: "企画力",
    skill_planning_desc: "★ <b>インプットとアイデアのメモ習慣</b><br>日々映画やゲームを通じて多様なインプットを行い、ひらめいたアイデアを即座にメモする習慣を大切にしています。<br><br>★ <b>深い集中力と発想力</b><br>散歩や音楽鑑賞を通じて自分の世界に深く没頭し、クリエイティブな思考や独自のゲームコンセプトを膨らませるのが得意です。<br><br>一番影響を受けた映画：<br>借りぐらしのアリエッティ<br><div class=\"influence-img-container\"><img src=\"assets/influence_movie.jpg\" alt=\"借りぐらしのアリエッティ\" class=\"influence-img\"></div>一番影響を受けたゲーム：<br>ペーパーマリオ スーパーシール<br><div class=\"influence-img-container\"><img src=\"assets/influence_game.jpg\" alt=\"ペーパーマリオ スーパーシール\" class=\"influence-img\"></div>",
    skill_ppt_title:       "PowerPoint",
    skill_ppt_desc:        "：企画書：発表資料",
    skill_ppt_detail_desc: "企画書作成：16枚<br>発表資料作成：10回<br><br>★ <b>「見やすく・面白く・飽きさせない」資料づくり</b><br>企画書や発表資料を作成する際は、読み手がワクワクし、最後まで退屈せずに読める構成やレイアウトにこだわっています。<br><div class=\"skill-pdf-thumb-container\"><a href=\"assets/presentation.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"skill-pdf-thumb-link\"><img src=\"assets/presentation_thumb.png\" alt=\"発表資料サムネイル\" class=\"skill-pdf-thumb\"></a></div>",
    skill_excel_title:     "Excel",
    skill_excel_desc:      "：仕様書：レベルデザイン",
    skill_excel_detail_desc: "★ <b>仕様を伝えるために</b><br>色分けをし、自分が何処を担当しているか分かりやすいようにしています。<br><div class=\"trend-img-container\"><img src=\"assets/spec_excel.png\" alt=\"Excel仕様・タスク管理\" style=\"max-width: 100%; height: auto;\"></div>",
    skill_unity_title:     "Unity",
    skill_unity_desc:      "：タイルマップ：基本機能",
    skill_unity_detail_desc: "★ <b>Unityの経験：1年</b><br>個人製作やチーム制作に貢献できるように勉強し基本の操作は分かるようになりました。<br>マップを直感的に設計したいので、自分でタイルマップを触っています。<br><div class=\"trend-img-container\"><img src=\"assets/spec_unity.png\" alt=\"Unity Tilemap 編集画面\" style=\"max-width: 100%; height: auto;\"></div>",
    skill_unreal_title:    "Unreal Engine",
    skill_unreal_desc:     "：ムービー制作",
    skill_unreal_detail_desc: "★ <b>マップとムービー制作</b><br>コツコツと制作することが多くマップとムービーにこだわりがあります。特にライティングを意識しており、Unreal Engineの良さを引き出します。<br><div class=\"trend-img-container\"><img src=\"assets/spec_unreal.png\" alt=\"Unreal Engine シネマティック画面\" style=\"max-width: 100%; height: auto;\"></div>",

    works_title_sub: "制作実績",
    events_title_sub: "イベント実績",
    event_caption1:   "BitSummit 2026 ボランティアチーム",
    event_caption2:   "KBS京都「きゅんと！」テレビ出演",
    event_caption3:   "BitSummit 2025 ボランティアチーム",
    event_item1:      "OPEN GAME FEST<span class=\"event-item-sub\">：ボランティアスタッフ</span>",
    event_item2:      "BitSummit the 13th Summer of Yokai<span class=\"event-item-sub\">：ボランティアスタッフ</span>",
    event_item3:      "大阪・関西万博関西パビリオン京都ゾーン<span class=\"event-item-sub\">：<br>ボランティアスタッフ</span>",
    event_item4:      "OSAKA INDIE GAMES SUMMIT 2025<span class=\"event-item-sub\">：ボランティアスタッフ</span>",
    event_item5:      "KBS京都情報系番組「きゅんと」ゲスト出演<span class=\"event-item-sub\">：<br>大阪・関西万博関西パビリオン京都ゾーンでの<br>ボランティアスタッフ経験インタビュー</span>",
    event_item6:      "GGX NEXUS JAM<span class=\"event-item-sub\">：プランナーとして参加</span>",
    event_item7:      "SEIKAサブカルフェスタ2025<span class=\"event-item-sub\">：ボランティアスタッフ</span>",
    event_item8:      "京都企業説明会MC<span class=\"event-item-sub\">：eスポーツの市場拡大に<br>ついてのプレゼンテーションを行う</span>",
    event_item9:      "ゲームパビリオンjp2026<span class=\"event-item-sub\">：ゲーム展示</span>",
    event_item10:     "学校内行事<span class=\"event-item-sub\">：オープンキャンパススタッフ</span>",
    event_item11:     "BitSummit PUNCH<span class=\"event-item-sub\">：ボランティアスタッフ：ゲーム展示</span>",
    event_summary_title: "💡 イベントを経験して",
    event_summary_bubble: "面白さと楽しさを<br>追求するために！",
    event_summary_desc: "<span style='display:inline-block;'>お客様がどのジャンルのゲームをプレイするかを注目し流行りを把握</span><br><span style='display:inline-block;'>そして遊んでいただいた反応を見てゲームのブラッシュアップを行い</span><br><span style='display:inline-block;'>翌日につなげる行動力を高めました！</span>",
    
    role_label:      "担当:",
    exhibit_label:   "出展:",
    play_btn:        "ゲームをプレイする 🎮",

    // Harvethm
    work1_tag:       "2D GAME / TEAM",
    work1_title:     "Harvethm – ハーベズム –",
    work1_role:      "プランナー、仕様書、ギミック",
    work1_exhibit:   "GGX NEXUS JAM：GGX Games Showcase展示",
    work1_desc:      "おじいちゃんの農園を継いでやってきた少女は、音楽の神様と出会い1年間の契約をします。作物を育てて演奏をする、音楽×農業ゲーム🎶収穫して得たお金で、自分だけの音色に拡張することも……！",
    work1_details_summary: "<b>こだわり＆得られた経験</b>",
    work1_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>ゲームJAMでの制作ながら「1本のゲームとしての完成度」にこだわり、短期間とは思えないボリューム感とクオリティを実現しました。<br>チームメンバーが一から手掛けたオリジナル音楽に合わせ、テンキーで手軽に遊べる農業仕様を採用。「音楽×農場」というジャンルがもたらす、直感的で繰り返し遊びたくなる魅力を徹底的に追求しました。<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>・企画仕様書の書き方、UIデザイン、そして独自ギミックをゲームの面白さに落とし込む設計力を高めました。<br><br>・「リズムマシン」という実機の特殊デバイスを用いた開発だったため、ハードウェア（Unity連携）との接続処理や、展示会での不測のトラブルに対する臨機応変な対応力を養うことができました。",

    // Yolk you
    work2_tag:       "2D GAME / TEAM",
    work2_title:     "Yolk you",
    work2_role:      "プランナー、仕様書、ギミック、レベルデザイン",
    work2_exhibit:   "BitSummit Game Jam 2026：BitSummit PUNCH展示",
    work2_desc:      "「あなたは”白身”、黄身をこぼさず目的地までたどり着こう！」キッチンから飛び出し、森を抜け、最後にはなんと○○に進む！道中には、卵を狙うカラスなどたくさんの困難が待ち構える！協力してワイワイ！黄身がこぼれるドキドキ！協力 2D ジャンプアクションゲーム！！",
    work2_details_summary: "こだわり＆得られた経験",
    work2_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>白身を直感的に動かしたいと考え、マウスやボタンではなくタッチ操作で動かすというのを考え軸にしました<br>白身が左右で分かれているため2人でも1人でもできるゲーム性に出来ることができ、ハラハラとドキドキを味わえるよう上に上っていき卵の孵化を目指す仕様に落とし込みました<br>レベルデザインと仕様書を担当し、遊んでもらう人に遊びながら覚えるというのを意識しました<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>仕様書のプログラマ、デザイナーに伝わる書き方<br>タスク振りわけ、会議進行などのプランナーの基礎的な仕事を経験することが出来ました<br>レベルデザインの書き方と面白さと狙いを伝える能力を高めることが出来ました<br>様々な学校の方いらっしゃる場なので不安にさせない、嫌な気持ちにさせないコミュニケーション能力を大事にしもっと高めることが出来ました",

    // Black & White
    work3_tag:       "2D GAME / SOLO",
    work3_title:     "Black ＆ White",
    work3_role:      "ソロ開発",
    work3_exhibit:   "ゲームパビリオンjp2026 展示：BitSummit PUNCH展示",
    work3_desc:      "これは表の世界と裏の世界にいるキューブの物語<br>キューブの動きは一心同体、赤い敵が襲い掛かって来る中、ジャンプやギミックを駆使しゴールを目指しましょう",
    work3_details_summary: "こだわり＆得られた経験",
    work3_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>unity1weekを個人製作で行いました、テーマがうらで他の人とは違う案を作りたく、スーパーマリオ オデッセイの2Dと3Dが切り替わる瞬間にインスピレーションを受け、表の世界と裏の世界を同時に動かす案が生れました。そしてお互い同じ重力だとただ単に動かすだけになってしまうので裏の世界の重力を反転させ、動かすだけで面白いゲームに仕上げることが出来ました<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>初の個人制作なのでUnityの機能に当たる、タイルマップやエフェクト、そしてプログラム全般を学ぶ機会になりました<br>unity1weekが終了した後もブラッシュアップを行い、展示をさせていただき、お客様の声を聴いて更なるブラッシュアップを行える行動力と基礎的能力を高められました<br><br>これを活かし次の個人製作につなげられる土台を得ました",

    // Oxゲーム
    work4_tag:       "2D GAME / SOLO",
    work4_title:     "Oxゲーム",
    work4_role:      "ソロ開発",
    work4_exhibit:   "Web公開",
    work4_desc:      "帰宅中...キーホルダーでゲームした懐かしさを...<br>手軽にでき、スマホでもPCでもプレイできる！<br>さあ！君の反射神経を試すとき！",
    work4_details_summary: "こだわり＆得られた経験",
    work4_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>初のブラウザゲーム制作にあたり、「分かりやすさ」と「すぐに遊べる手軽さ」を最優先に設計しました。シンプルなゲームプレイだからこそ生まれるプレイヤーの一喜一憂する感情を大切にし、スマートフォンとPCの両方で快適に遊べるマルチデバイス対応を行いました。デザイン面では、昔ながらの「ゲームセンター」や「液晶キーホルダーゲーム」をモチーフにし、レトロで遊び心のあるビジュアルを意識して制作しました。<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>・GitHubを活用し、自身が制作したゲームをブラウザ上に公開し、ユーザーに届けるまでの一連の開発フローを習得しました。<br><br>・ルールを極限までシンプルに削ぎ落とし、ゲーム性の楽しさを研ぎ澄ますことで、小規模な開発でありながらもプレイヤーが繰り返し遊べるゲームバランスを構築する手法を学びました。",

    // Recoil Flight
    work5_tag:       "2D GAME / TEAM",
    work5_title:     "Recoil Flight",
    work5_role:      "メインプランナー、レベルデザイン、UI、SE：BGM",
    work5_exhibit:   "Web公開",
    work5_desc:      "弾を発射し反動で進もう！<br>感覚と反射神経がカギになる！敵に当たっても死なない！そして敵に弾を当てると弾が復活するぞ！全部で5ステージ！君はクリアできるのか...",
    work5_details_summary: "こだわり＆得られた経験",
    work5_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>学内ゲームJAMにて制作した作品です。テーマ「発射」に対し、単に弾を発射するだけでなく、銃の「反動（発射）」を利用して進む【反動×イライラ棒アクション】というひねりを加えた企画を考案しました。何度も挑戦（試行錯誤）した末にゴールに到達した際のエフェクト演出にこだわり、プレイヤーが得られる大きな達成感と面白さを追求しました。<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>・チームに後輩メンバーが在籍していたため、ゲームをどう面白くしていくかのプロセスを共に考えながら、後輩の育成に携わりました。人に教える難しさを学ぶと共に、チーム内のコミュニケーション能力を高める経験となりました。<br>・プログラマに常に寄り添い、どんな些細な疑問や提案でも気軽に相談してもらえる「話しやすい雰囲気（心理的安全性）」を意識してチーム構築を行う大切さを学びました。<br>・タイルマップを用いたレベルデザインにおいて、「攻略ルートを複数用意する」ことを意識しました。ルートごとに異なる体験や楽しさを提供する設計手法を学び、実装まで落とし込む能力を高めました。",

    // Recent Activity
    recent_title_sub: "最近の動向",
    recent_status:   "コツコツ頑張ってます！",
    recent_item1_title: "学校内でのJAMに参加中！",
    recent_item1_desc: "学内のクリエイター仲間と協力し、限られた時間の中で新しいアイデアのゲーム開発に挑戦しています！",
    recent_item1_btn:  "作品を見る：Recoil Flight",
    recent_item2_title: "サークル活動のJAMに参加中！",
    recent_item2_desc: "ゲーム制作サークル「ハイミント」の仲間たちと共同で、企画から実装まで役割を分担して制作中です！",
    recent_item2_summary: "得られたこと",
    recent_item2_details: "後輩育成の場やサークル活動を通じて、メンバーをどう動かし、経験をしてもらうかを考え実行できる<br>能力を高めることができました！",
    recent_item3_title: "最近はこんな企画書（3枚）を書きました！",
    recent_item3_desc: "『Time is Experience』という2Dアクションゲームの企画書です。コンセプト設計から仕様の言語化まで行いました。",
    recent_item4_title: "APEX大会で優勝しました！",
    recent_item4_desc: "10th Crowd Fes ver. Apex Legends WILD CARDにて、チーム「KeSSA」として見事優勝を勝ち取りました！🏆",

    contact_title:   "CONTACT",
    contact_title_sub: "お問い合わせ",
    contact_desc:    "企画、制作に関するご連絡や、作品へのご意見などはメールやXのダイレクトメッセージ等でお気軽にご連絡ください。",
    contact_x_btn:   "@katayama_589",
  },
  en: {
    nav_home:        "Home",
    nav_about:       "About & Skills",
    nav_about_short: "About",
    nav_works:       "Works",
    nav_events:      "Events",
    nav_recent:      "Hobbies",
    nav_contact:     "Contact",
    hero_badge:      "GAME PLANNER",
    hero_title:      "<span class='title-line'>Beyond Limits,</span><br><span class='title-line'>The Ultimate Game Experience.</span>",
    hero_desc:       "Passionate about designing and articulating what makes games fun — from concept planning and level design to writing specifications that help teams deliver their best work.",
    hero_btn_works:  "View Works",
    hero_btn_about:  "About Me",
    hero_btn_recent: "Recent Activity",
    about_title_sub: "Introduction",
    about_lead:      "Training hard in team and solo game development!",
    about_p1:        "I always think about what makes games 'fun' and strive to share that joy with every player.",
    about_p2:        "I design clear, engaging game design documents and specs to keep the reading experience fun!",
    about_doc_title: "Game Design Document",
    about_doc_desc:  "I design GDDs with a strong emphasis on world-building and clean layouts to ensure the core game mechanics and fun are easily understood.",
    about_spec_title: "Specification Document",
    about_spec_desc:  "I design specs to be clear, readable, and visually intuitive.<br>I specialize in level design, detailing my goals and intentions directly on the map layout.",
    about_ach_title: "🏆 Achievements",
    about_ach1:      "BSGJ2026 Jury Award / Special Jury Award \"Yolk you\"",
    about_ach1_role: " (GDD, Level Design, Planner)",
    view_yolk_you: "View Project: Yolk you",
    about_ach_bubble: "Big thanks to the team!",
    about_meta_school:   "Department of Digital Games, Game Course - Sophomore (Graduating in 2029)",
    about_meta_club:     "Vice President, Game Creation Club 'High Mint'",
    about_school_label: "School:",
    about_school:    "Kyoto Computer Gakuin Ekimae Campus",
    about_role_label:"Target Role:",
    about_role:      "Game Planner",
    hobbies_title:   "🎯 Hobbies",
    hobby1_tag:      "MAHJONG",
    hobby1_desc:     "A game of wits and probability! I love devising winning hands and pushing strategies.",
    hobby2_tag:      "MY CAT",
    hobby2_desc:     "My healing buddy. The best partner when relaxing at home.",
    hobby3_tag:      "RAMEN",
    hobby3_desc:     "Love thick broth Ramen! It's my daily routine to explore delicious ramen shops.",
    hobby4_tag:      "GAME & GOODS",
    hobby4_desc:     "Collecting character goods and figures from my favorite games.",
    skills_title_sub:"Skills & Tools",
    skill_planning_title: "Planning Ability",
    skill_planning_desc: "★ <b>Input & Idea Memo Habit</b><br>I value the habit of actively gathering diverse inputs daily through movies and games, and immediately jotting down any inspired ideas.<br><br>★ <b>Deep Focus & Imagination</b><br>I am skilled at immersing myself deeply in my own world through walks or listening to music, allowing me to expand creative thoughts and unique game concepts.<br><br>Most Influential Movie:<br>The Secret World of Arrietty<br><div class=\"influence-img-container\"><img src=\"assets/influence_movie.jpg\" alt=\"The Secret World of Arrietty\" class=\"influence-img\"></div>Most Influential Game:<br>Paper Mario: Sticker Star<br><div class=\"influence-img-container\"><img src=\"assets/influence_game.jpg\" alt=\"Paper Mario: Sticker Star\" class=\"influence-img\"></div>",
    skill_ppt_title:       "PowerPoint",
    skill_ppt_desc:        ": GDD & Presentation",
    skill_ppt_detail_desc: "GDDs Created: 16<br>Presentation Slides Created: 10 times<br><br>★ <b>\"Clear, Fun, & Engaging\" Documents</b><br>When creating game pitches and presentation materials, I focus heavily on structure and layouts that keep the reader excited and engaged until the very end.<br><div class=\"skill-pdf-thumb-container\"><a href=\"assets/presentation.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"skill-pdf-thumb-link\"><img src=\"assets/presentation_thumb.png\" alt=\"Presentation Thumbnail\" class=\"skill-pdf-thumb\"></a></div>",
    skill_excel_title:     "Excel",
    skill_excel_desc:      ": Spec & Level Design",
    skill_excel_detail_desc: "★ <b>To convey specifications clearly</b><br>We use color coding so that everyone can easily understand who is responsible for each task.<br><div class=\"trend-img-container\"><img src=\"assets/spec_excel.png\" alt=\"Excel specifications\" style=\"max-width: 100%; height: auto;\"></div>",
    skill_unity_title:     "Unity",
    skill_unity_desc:      ": Tilemap & Features",
    skill_unity_detail_desc: "★ <b>Unity Experience: 1 Year</b><br>I have studied to contribute to both solo and team development, and have mastered basic operations.<br>To design maps intuitively, I practice building layouts using Tilemaps.<br><div class=\"trend-img-container\"><img src=\"assets/spec_unity.png\" alt=\"Unity Tilemap screen\" style=\"max-width: 100%; height: auto;\"></div>",
    skill_unreal_title:    "Unreal Engine",
    skill_unreal_desc:     ": Cinematic Sequencer",
    skill_unreal_detail_desc: "★ <b>Map & Cinematic Production</b><br>I often focus on detailed, steady production work and take pride in my map layouts and cinematics. I pay special attention to lighting to draw out the absolute best of Unreal Engine.<br><div class=\"trend-img-container\"><img src=\"assets/spec_unreal.png\" alt=\"Unreal Engine Cinematic screen\" style=\"max-width: 100%; height: auto;\"></div>",

    works_title_sub: "Portfolio",
    events_title_sub: "Event Activities & Public PR",
    event_caption1:   "BitSummit 2026 Volunteer Team",
    event_caption2:   "KBS Kyoto 'Kyunto!' TV Appearance",
    event_caption3:   "BitSummit 2025 Volunteer Team",
    event_item1:      "OPEN GAME FEST<span class=\"event-item-sub\">: Volunteer Staff</span>",
    event_item2:      "BitSummit the 13th Summer of Yokai<span class=\"event-item-sub\">: Volunteer Staff</span>",
    event_item3:      "Expo 2025 Osaka Kyoto Pavilion<span class=\"event-item-sub\">:<br>Volunteer Staff</span>",
    event_item4:      "OSAKA INDIE GAMES SUMMIT 2025<span class=\"event-item-sub\">: Volunteer Staff</span>",
    event_item5:      "KBS Kyoto TV Show 'Kyunto!' Guest Appearance<span class=\"event-item-sub\">:<br>Interview on Volunteer Experience at<br>Expo 2025 Osaka Kyoto Pavilion</span>",
    event_item6:      "GGX NEXUS JAM<span class=\"event-item-sub\">: Participated as a Planner</span>",
    event_item7:      "SEIKA Subculture Festival 2025<span class=\"event-item-sub\">: Volunteer Staff</span>",
    event_item8:      "Kyoto Career Briefing MC<span class=\"event-item-sub\">:<br>Gave a presentation on e-sports<br>market expansion</span>",
    event_item9:      "Game Pavilion jp 2026<span class=\"event-item-sub\">: Game Exhibition</span>",
    event_item10:     "School Event<span class=\"event-item-sub\">: Open Campus Staff</span>",
    event_item11:     "BitSummit PUNCH<span class=\"event-item-sub\">: Volunteer Staff & Game Exhibition</span>",
    event_summary_title: "💡 What I Gained from Event Experiences",
    event_summary_bubble: "To pursue fun and enjoyment!",
    event_summary_desc: "By participating in events, I observed player preferences to grasp trends,<br>brushed up games based on their reactions,<br>and gained the drive to implement improvements by the very next day!",
    
    role_label:      "Role:",
    exhibit_label:   "Exhibited:",
    play_btn:        "Play Game 🎮",

    // Harvethm
    work1_tag:       "2D GAME / TEAM",
    work1_title:     "Harvethm",
    work1_role:      "Planner, Spec Writer, Gimmick Designer",
    work1_exhibit:   "GGX NEXUS JAM: GGX Games Showcase Exhibition",
    work1_desc:      "A girl who inherited her grandfather's farm meets the God of Music and signs a one-year contract. Grow crops and play music in this music x farming game!🎶 Expand your own melody with the money you earn by harvesting!",
    work1_details_summary: "My Focus & Experience",
    work1_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>Although it was a Game Jam project, we wanted to complete it as a full game, creating a voluminous experience that exceeds expectations for a Jam entry.<br>The music is our absolute pride, as our team members created it entirely from scratch.<br>We designed the gameplay to be playable on a numeric keypad to perfectly match the farming mechanics, focusing on clean game screens and the unique appeal of mixing music games with farming games.<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>I improved my ability to write clear specifications, design UI layouts, and analyze how gameplay mechanics can be translated into fun features.<br>Since it was a game built for a custom rhythm machine device, I established a solid foundation for handling hardware connectivity with Unity and managing unexpected technical troubleshooting during showcase exhibitions.",

    // Yolk you
    work2_tag:       "2D GAME / TEAM",
    work2_title:     "Yolk you",
    work2_role:      "Planner, Spec Writer, Gimmick, Level Design",
    work2_exhibit:   "BitSummit Game Jam 2026: BitSummit PUNCH Exhibition",
    work2_desc:      "\"You are the egg white! Reach the destination without dropping the yolk!\" Jump out of the kitchen, go through the forest, and finally head to...! Many obstacles like crows await! A cooperative 2D jump action game full of excitement and laughter!",
    work2_details_summary: "My Focus & Experience",
    work2_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>I wanted players to move the egg white intuitively, so I made touch controls the core design instead of mouse or button inputs.<br>Since the egg white is divided into left and right parts, it can be played by either one or two players. To create excitement and anticipation, I designed the specification to climb upwards and aim for the egg to hatch.<br>I was in charge of level design and GDD (Game Design Document), focusing on letting players learn the mechanics naturally while playing.<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>I learned how to write specifications that clearly communicate ideas to programmers and designers.<br>I gained experience in basic planner tasks such as assigning tasks and facilitating meetings.<br>I improved my ability to write level design documentation and convey the fun and objectives of the design.<br>Since the team consisted of students from various schools, I prioritized communication skills to make everyone feel comfortable and valued, further strengthening my interpersonal skills.",

    // Black & White
    work3_tag:       "2D GAME / SOLO",
    work3_title:     "Black & White",
    work3_role:      "Solo Developer",
    work3_exhibit:   "Game Pavilion jp 2026: BitSummit PUNCH Exhibition",
    work3_desc:      "This is a story of cubes in the front and back worlds.<br>Their movements are unified as one. While red enemies attack, use jumps and gimmicks to reach the goal!",
    work3_details_summary: "My Focus & Experience",
    work3_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>I participated in unity1week as a solo project. The theme was \"Ura\" (back/behind), and I wanted to create an idea different from others. Inspired by the transition between 2D and 3D in Super Mario Odyssey, the concept of moving both the front and back worlds simultaneously was born. If they had the same gravity, it would just be a simple synchronization. Therefore, I inverted the gravity of the back world, making it fun and engaging to play just by moving!<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>Since it was my first solo project, it was a great opportunity to learn Unity features like tilemaps and effects, as well as programming in general.<br>Even after unity1week, I continued to polish the game and exhibited it. Through listening to customers' feedback, I improved my proactive drive and basic skills for further game refinement.<br><br>This project gave me a solid foundation to leverage for my next solo game development!",

    // Ox Game
    work4_tag:       "2D GAME / SOLO",
    work4_title:     "Ox Game",
    work4_role:      "Solo Developer",
    work4_exhibit:   "Web Release",
    work4_desc:      "Recalling the nostalgia of playing games on keychains on the way home...<br>Easy to play on both smartphones and PCs!<br>Now, time to test your reflexes!",
    work4_details_summary: "My Focus & Experience",
    work4_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>For my first browser game, I focused on making it easy to understand and playable immediately!<br>I valued the emotions created within a simple game, making it accessible on both smartphones and PCs.<br>For the design, I imagined a traditional game arcade and a keychain game!<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>I learned how to use GitHub to publish games to the browser!<br>I realized that by keeping the rules simple and the gameplay fun, we can create a game that is truly engaging.",

    // Recoil Flight
    work5_tag:       "2D GAME / TEAM",
    work5_title:     "Recoil Flight",
    work5_role:      "Main Planner, Level Design, UI, SE: BGM",
    work5_exhibit:   "Web Release",
    work5_desc:      "Shoot bullets and move forward with the recoil!<br>Your senses and reflexes are the key!<br>You won't die even if you hit an enemy! And if you hit them with a bullet, your ammo is restored!<br><br>5 stages in total! Can you clear them all...?",
    work5_details_summary: "My Focus & Experience",
    work5_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>This project was created during a school game jam.<br>The theme was \"Launch,\" and there were many ideas to consider. Since launching something is simple, we wanted a unique spin and created a \"Recoil x Irritating Stick Game\" where players move using the recoil of their gun! The design is simple, but we paid close attention to the visual effects.<br>We aimed to deliver fun and a strong sense of achievement through learning by trial and error, accompanied by satisfying celebration effects upon reaching the goal.<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>Since there were junior students on the team, I helped them brainstorm ideas to bring out the fun, which improved my mentoring and communication skills.<br><br>I learned the value of working closely with programmers, actively building a friendly atmosphere where they could reach out and discuss anything at any time.<br><br>Through tilemap-based level design, I worked under the mindset that \"there are multiple routes to the goal,\" strengthening my ability to devise and implement level designs that offer different kinds of fun and challenges.",

    // Recent Activity
    recent_title_sub: "Recent Activity",
    recent_status:   "Working hard every day!",
    recent_item1_title: "Participating in School Game Jam!",
    recent_item1_desc: "Collaborating with fellow students to create innovative games within a tight time limit!",
    recent_item1_btn:  "View Work: Recoil Flight",
    recent_item2_title: "Participating in Club Game Jam!",
    recent_item2_desc: "Developing a new game with members of our game creation club 'High Mint', sharing design and development tasks!",
    recent_item2_summary: "What I Gained",
    recent_item2_details: "I improved my ability to lead people and help them gain valuable experience,<br>both in a mentoring environment for juniors and within our circle!",
    recent_item3_title: "Recently written GDDs (3 pages)!",
    recent_item3_desc: "A Game Design Document for the 2D action game 'Time is Experience'. I did concept design and spec writing.",
    recent_item4_title: "Won an APEX tournament!",
    recent_item4_desc: "Won 1st place in the 10th Crowd Fes ver. Apex Legends WILD CARD as team 'KeSSA'! 🏆",

    contact_title:   "CONTACT",
    contact_title_sub: "Get in Touch",
    contact_desc:    "Feel free to reach out via email or X (Twitter) DM for any inquiries about planning, production, or feedback on my work.",
    contact_x_btn:   "@katayama_589",
  }
};

let currentLang = 'ja';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // data-i18n属性の要素を更新
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // html lang属性を更新
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';

  // ボタンのハイライト切り替え
  document.body.classList.toggle('lang-ja', lang === 'ja');
  document.body.classList.toggle('lang-en', lang === 'en');
}

// 初期状態
document.body.classList.add('lang-ja');

// ボタンのクリックイベント
document.getElementById('lang-toggle').addEventListener('click', () => {
  const next = currentLang === 'ja' ? 'en' : 'ja';
  applyLanguage(next);
});

/* ==========================================================================
   Skill Bar Animation using Intersection Observer
   ========================================================================== */
const skillSection = document.querySelector('.skills-list-compact');
const skillBars = document.querySelectorAll('.skill-bar-fill');

// 初期状態でスキルバーを0%にしておく (CSSインラインでwidthを指定しているので、一度初期化)
skillBars.forEach(bar => {
  const targetWidth = bar.style.width;
  bar.style.width = '0%';
  bar.setAttribute('data-width', targetWidth);
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
      // 一度アニメーションしたら監視を解除
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

if (skillSection) {
  skillObserver.observe(skillSection);
}

/* ==========================================================================
   Active Navigation on Scroll
   ========================================================================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  const scrollPosition = window.scrollY + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.add('active');
    }
  });
});

/* ==========================================================================
   Mobile Burger Menu
   ========================================================================== */
const menuToggle = document.querySelector('.menu-toggle');
const navElement = document.querySelector('nav');

if (menuToggle && navElement) {
  menuToggle.addEventListener('click', () => {
    const isMobileNavOpen = navElement.classList.toggle('active');
    if (isMobileNavOpen) {
      menuToggle.innerHTML = '<span class="material-symbols-outlined">close</span>';
    } else {
      menuToggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    }
  });

  // メニューアイテムがクリックされたら閉じる
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navElement.classList.remove('active');
        menuToggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      }
    });
  });
}
