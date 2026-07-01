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
    skill_ppt_title:       "PowerPoint",
    skill_ppt_desc:        "：企画書：発表資料",
    skill_excel_title:     "Excel",
    skill_excel_desc:      "：仕様書：レベルデザイン",
    skill_unity_title:     "Unity",
    skill_unity_desc:      "：タイルマップ：基本機能",
    skill_unreal_title:    "Unreal Engine",
    skill_unreal_desc:     "：ムービー制作",
    skill_tyrano_title:    "ティラノビルダー",
    skill_tyrano_desc:     "：物語の制作",
    works_title_sub: "制作実績",
    events_title_sub: "イベント実績",
    event_caption1:   "BitSummit 2026 ボランティアチーム",
    event_caption2:   "KBS京都「きゅんと！」テレビ出演",
    event_caption3:   "BitSummit 2025 ボランティアチーム",
    event_item1:      "OGF2025",
    event_item2:      "bitsummit2025",
    event_item3:      "大阪万博：京都ブース お手伝い",
    event_item4:      "大阪インディーゲームサミット2025",
    event_item5:      "KBS京都情報系番組「きゅんと」出演",
    event_item6:      "GGX",
    event_item7:      "SEIKAサブカルフェスタ2025",
    event_item8:      "京都企業説明会MC",
    event_item9:      "オープンキャンパススタッフ",
    event_item10:     "bitsummit2026",
    event_item11:     "RIT様との合同JAM",
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
    work1_exhibit:   "GGX #NEXUSJAM 出展",
    work1_desc:      "おじいちゃんの農園を継いでやってきた少女は、音楽の神様と出会い1年間の契約をします。作物を育てて演奏をする、音楽×農業ゲーム🎶収穫して得たお金で、自分だけの音色に拡張することも……！",
    work1_details_summary: "<b>こだわり＆得られた経験</b>",
    work1_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>JAMの制作なのですが1本のゲームとして完成させたく、JAMの作品とは思えないボリューミーなゲームに仕上げることができました<br>音楽はチームメンバーが一から制作しているのでこだわりがあります<br>テンキーで遊べて農業の仕様とマッチするようにこだわりました、ゲーム画面が見やすく音楽ゲーム✖農場ゲームといったやりたくなる面白さを大切にしました<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>仕様書の書き方とUIのデザイン力そしてギミックでどう面白くなるかを考え、落とし込む能力を高めましたリズムマシンという特殊デバイスのゲーム制作になりますのでUnityとの接続の仕方や展示する時のアクシデントなどの臨機応変の土台も高めることが出来ました",

    // Yolk you
    work2_tag:       "2D GAME / TEAM",
    work2_title:     "Yolk you",
    work2_role:      "プランナー、仕様書、ギミック、レベルデザイン",
    work2_exhibit:   "bitsummit-gamejam2026 出展",
    work2_desc:      "「あなたは”白身”、黄身をこぼさず目的地までたどり着こう！」キッチンから飛び出し、森を抜け、最後にはなんと○○に進む！道中には、卵を狙うカラスなどたくさんの困難が待ち構える！協力してワイワイ！黄身がこぼれるドキドキ！協力 2D ジャンプアクションゲーム！！",
    work2_details_summary: "こだわり＆得られた経験",
    work2_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>白身を直感的に動かしたいと考え、マウスやボタンではなくタッチ操作で動かすというのを考え軸にしました<br>白身が左右で分かれているため2人でも1人でもできるゲーム性に出来ることができ、ハラハラとドキドキを味わえるよう上に上っていき卵の孵化を目指す仕様に落とし込みました<br>レベルデザインと仕様書を担当し、遊んでもらう人に遊びながら覚えるというのを意識しました<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>仕様書のプログラマ、デザイナーに伝わる書き方<br>タスク振りわけ、会議進行などのプランナーの基礎的な仕事を経験することが出来ました<br>レベルデザインの書き方と面白さと狙いを伝える能力を高めることが出来ました<br>様々な学校の方いらっしゃる場なので不安にさせない、嫌な気持ちにさせないコミュニケーション能力を大事にしもっと高めることが出来ました",

    // Black & White
    work3_tag:       "2D GAME / SOLO",
    work3_title:     "Black ＆ White",
    work3_role:      "ソロ開発",
    work3_exhibit:   "ゲームパビリオンjp2026 出展 / bitsummit2026 出展",
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
    work4_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>初のブラウザゲーム制作にあたり、分かりやすく、すぐに遊べる事を<br>意識しました！そのため簡単なゲームの中で生まれる感情を大切にし<br>スマホでもPCでも出来るようにしました！<br>デザイン面でも昔ながらのゲームセンターとキーボルダーゲームを<br>イメージしました！<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>githubを使用しブラウザに投稿する方法を学びました！<br>ルールを簡単にし、ゲーム性を面白くすればしっかり遊べるゲームが制作できる事",

    // Recoil Flight
    work5_tag:       "2D GAME / TEAM",
    work5_title:     "Recoil Flight",
    work5_role:      "メインプランナー、レベルデザイン、UI、SE：BGM",
    work5_exhibit:   "Web公開",
    work5_desc:      "弾を発射し反動で進もう！<br>感覚と反射神経がカギになる！敵に当たっても死なない！そして敵に弾を当てると弾が復活するぞ！全部で5ステージ！君はクリアできるのか...",
    work5_details_summary: "こだわり＆得られた経験",
    work5_details_content: "<div class=\"details-section-title\">💡 こだわり</div><br>学校内のゲームJAMに参加し制作した作品です<br>テーマは【発射】で考えられる案は沢山ありました<br>何かを発射するのはシンプルなので違った案にしたいと考え銃の反動で進む【反動✖イライラ棒ゲーム】を制作しました！シンプルなデザインですがエフェクトにこだわりを入れております<br>ゴールにたどり着くまでに死んで攻略そしてたどり着いた時のエフェクトと達成感の面白さを追求しました<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 得られた経験</div><br>チームには後輩の子がいたので案をどう考えて面白さを出すかを一緒に考えながら育成＋後輩にどう教えるかのコミュニケーション能力を高めました<br><br>プログラマと寄り添い、いつでも相談をしてもらえる空気の良さを学び意識しました<br><br>タイルマップでのレベルデザインでルートは何種類もある！という意識の元違った楽しさ面白さをだせるレベルデザインを考えて実行する能力を高めました",

    // Recent Activity
    recent_title_sub: "最近の動向",
    recent_status:   "コツコツ頑張ってます！",
    recent_item1_title: "学校内でのJAMに参加中！",
    recent_item1_desc: "学内のクリエイター仲間と協力し、限られた時間の中で新しいアイデアのゲーム開発に挑戦しています！",
    recent_item1_btn:  "作品を見る：Recoil Flight",
    recent_item2_title: "サークル活動のJAMに参加中！",
    recent_item2_desc: "ゲーム制作サークル「ハイミント」の仲間たちと共同で、企画から実装まで役割を分担して制作中です！",
    recent_item2_summary: "得られたこと",
    recent_item2_details: "後輩育成の場やサークルという人をどう動かし<br>経験をしてもらうかを考え実行できる能力を<br>高めることができました！",
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
    skill_ppt_title:       "PowerPoint",
    skill_ppt_desc:        ": GDD & Presentation",
    skill_excel_title:     "Excel",
    skill_excel_desc:      ": Spec & Level Design",
    skill_unity_title:     "Unity",
    skill_unity_desc:      ": Tilemap & Features",
    skill_unreal_title:    "Unreal Engine",
    skill_unreal_desc:     ": Cinematic Sequencer",
    skill_tyrano_title:    "TyranoBuilder",
    skill_tyrano_desc:     ": Narrative Design",
    works_title_sub: "Portfolio",
    events_title_sub: "Event Activities & Public PR",
    event_caption1:   "BitSummit 2026 Volunteer Team",
    event_caption2:   "KBS Kyoto 'Kyunto!' TV Appearance",
    event_caption3:   "BitSummit 2025 Volunteer Team",
    event_item1:      "OGF 2025 (Osaka Game Festival)",
    event_item2:      "BitSummit 2025",
    event_item3:      "Expo 2025 Osaka: Kyoto Pavilion Staff",
    event_item4:      "Osaka Indie Game Summit 2025",
    event_item5:      "KBS Kyoto TV Show 'Kyunto!' Guest Appearance",
    event_item6:      "GGX (Global Game Jam / Event)",
    event_item7:      "SEIKA Subculture Festival 2025",
    event_item8:      "Kyoto Career Briefing MC",
    event_item9:      "Open Campus Student Staff",
    event_item10:     "BitSummit 2026",
    event_item11:     "Joint Game Jam with RIT",
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
    work1_exhibit:   "GGX #NEXUSJAM",
    work1_desc:      "A girl who inherited her grandfather's farm meets the God of Music and signs a one-year contract. Grow crops and play music in this music x farming game!🎶 Expand your own melody with the money you earn by harvesting!",
    work1_details_summary: "My Focus & Experience",
    work1_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>Although it was a Game Jam project, we wanted to complete it as a full game, creating a voluminous experience that exceeds expectations for a Jam entry.<br>The music is our absolute pride, as our team members created it entirely from scratch.<br>We designed the gameplay to be playable on a numeric keypad to perfectly match the farming mechanics, focusing on clean game screens and the unique appeal of mixing music games with farming games.<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>I improved my ability to write clear specifications, design UI layouts, and analyze how gameplay mechanics can be translated into fun features.<br>Since it was a game built for a custom rhythm machine device, I established a solid foundation for handling hardware connectivity with Unity and managing unexpected technical troubleshooting during showcase exhibitions.",

    // Yolk you
    work2_tag:       "2D GAME / TEAM",
    work2_title:     "Yolk you",
    work2_role:      "Planner, Spec Writer, Gimmick, Level Design",
    work2_exhibit:   "bitsummit-gamejam2026",
    work2_desc:      "\"You are the egg white! Reach the destination without dropping the yolk!\" Jump out of the kitchen, go through the forest, and finally head to...! Many obstacles like crows await! A cooperative 2D jump action game full of excitement and laughter!",
    work2_details_summary: "My Focus & Experience",
    work2_details_content: "<div class=\"details-section-title\">💡 My Focus</div><br>I wanted players to move the egg white intuitively, so I made touch controls the core design instead of mouse or button inputs.<br>Since the egg white is divided into left and right parts, it can be played by either one or two players. To create excitement and anticipation, I designed the specification to climb upwards and aim for the egg to hatch.<br>I was in charge of level design and GDD (Game Design Document), focusing on letting players learn the mechanics naturally while playing.<br><br><hr class=\"details-divider\"><br><div class=\"details-section-title experience-title\">🔥 Experience Gained</div><br>I learned how to write specifications that clearly communicate ideas to programmers and designers.<br>I gained experience in basic planner tasks such as assigning tasks and facilitating meetings.<br>I improved my ability to write level design documentation and convey the fun and objectives of the design.<br>Since the team consisted of students from various schools, I prioritized communication skills to make everyone feel comfortable and valued, further strengthening my interpersonal skills.",

    // Black & White
    work3_tag:       "2D GAME / SOLO",
    work3_title:     "Black & White",
    work3_role:      "Solo Developer",
    work3_exhibit:   "Game Pavilion jp 2026 / BitSummit 2026",
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
   Mobile Burger Menu (Simplified Demo)
   ========================================================================== */
const menuToggle = document.querySelector('.menu-toggle');
const navElement = document.querySelector('nav');

if (menuToggle && navElement) {
  menuToggle.addEventListener('click', () => {
    const isMobileNavOpen = navElement.style.display === 'flex';
    
    if (isMobileNavOpen) {
      navElement.style.display = 'none';
      menuToggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    } else {
      navElement.style.display = 'flex';
      navElement.style.flexDirection = 'column';
      navElement.style.position = 'absolute';
      navElement.style.top = '100%';
      navElement.style.left = '0';
      navElement.style.width = '100%';
      navElement.style.background = 'rgba(255, 255, 255, 0.98)';
      navElement.style.padding = '1.5rem';
      navElement.style.borderBottom = '1px solid var(--border)';
      menuToggle.innerHTML = '<span class="material-symbols-outlined">close</span>';
    }
  });

  // メニューアイテムがクリックされたら閉じる
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navElement.style.display = 'none';
        menuToggle.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      }
    });
  });
}
