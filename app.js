// PDFから抽出したクラスルームイングリッシュのデータ
// (カテゴリ、日本語、英語のペア)
const phrases = [
    // 1. 授業の始まり (STARTING CLASS)
    { category: "授業の始まり", japanese: "おはようございます。", english: "Good morning." },
    { category: "授業の始まり", japanese: "こんにちは。", english: "Hello. / Good afternoon." },
    { category: "授業の始まり", japanese: "みなさん、こんにちは。", english: "Hello, everyone." },
    { category: "授業の始まり", japanese: "英語の時間です。", english: "It's time for English class." },
    { category: "授業の始まり", japanese: "元気ですか。\n今日の調子はどうですか。", english: "How are you? / How are you today?" },
    { category: "授業の始まり", japanese: "準備はいいですか", english: "Are you ready?" },
    { category: "授業の始まり", japanese: "始めましょう。", english: "Let's begin. / Shall we begin?" },
    { category: "授業の始まり", japanese: "立ちなさい。", english: "Stand up." },
    { category: "授業の始まり", japanese: "座りなさい。", english: "Sit down." },

    // 2. 活動の始まり (STARTING ACTIVITIES)
    { category: "活動の始まり", japanese: "ゲームをしましょう。", english: "Let's play a game." },
    { category: "活動の始まり", japanese: "歌を歌いましょう。", english: "Let's sing a song." },
    { category: "活動の始まり", japanese: "[テキスト/ワークシート]を取り出しなさい。", english: "Take out your [textbook/worksheet]." },

    // 3. 活動中 (ACTIVITIES)
    { category: "活動中", japanese: "こちらに来なさい", english: "Come here." },
    { category: "活動中", japanese: "ペアになりなさい。", english: "Make pairs. / Get into pairs." },
    { category: "活動中", japanese: "円になりなさい。", english: "Make a circle." },
    { category: "活動中", japanese: "あなたの番です。", english: "It's your turn. / You're next." },
    { category: "活動中", japanese: "質問はありますか。", english: "Do you have any questions?" },

    // 5. 聞くことを中心とした活動 (LISTENING ACTIVITIES)
    { category: "聞く活動", japanese: "(CDを)聞きなさい。", english: "Listen (to the CD)." },
    { category: "聞く活動", japanese: "よく聞いて、点と点を線で結びなさい。", english: "Listen carefully and connect the dots." },

    // 9. 児童への指示 (CLASS CONTROL)
    { category: "指示", japanese: "手伝ってくれますか。", english: "Can you help me?" },
    { category: "指示", japanese: "テキストの6ページを開きなさい", english: "Open your textbook to page six." },
    { category: "指示", japanese: "絵を指差しなさい。", english: "Point at the picture." },
    { category: "指示", japanese: "もう一度言ってください", english: "Pardon me? / Could you say that again?" },
    { category: "指示", japanese: "[大きな声で/ゆっくり] 話しなさい", english: "Speak more [loudly/slowly]." },
    { category: "指示", japanese: "[私/相手]を見なさい。", english: "Look at [me/your partner]." },
    { category: "指示", japanese: "手を挙げなさい。", english: "Raise your hands." },
    { category: "指示", japanese: "静かにしなさい。", english: "Be quiet." },
    { category: "指示", japanese: "鉛筆を置きなさい。", english: "Put your pencil down." }, // From Writing Activities

    // 11. 授業の終わり (ENDING CLASS)
    { category: "授業の終わり", japanese: "今日はこれで終わります。", english: "That's all for today. / We're finished." },
    { category: "授業の終わり", japanese: "片付けなさい。", english: "Put your things away. / Clean up." },
    { category: "授業の終わり", japanese: "さようなら。", english: "Goodbye." },
    { category: "授業の終わり", japanese: "また[次回]会いましょう", english: "See you [next time]." },

    // 12. ほめる (PRAISING)
    { category: "ほめる", japanese: "正解です!", english: "That's right!" },
    { category: "ほめる", japanese: "よくできました!", english: "Good! / Great! / Good job! / Well done!" },
    { category: "ほめる", japanese: "素晴らしい!", english: "Wonderful! / Excellent! / Fantastic! / Super! / Perfect!" },

    // 13. 励ます (ENCOURAGING)
    { category: "励ます", japanese: "心配しないで。", english: "Don't worry." },
    { category: "励ます", japanese: "惜しい!", english: "Close! / Almost!" },
    { category: "励ます", japanese: "もう一度 [やりなさい/言いなさい]。", english: "[Try/Say] it again. / Once more. / One more time." },
    { category: "励ます", japanese: "君ならできるよ。", english: "You can do it." },
    { category: "励ます", japanese: "恥ずかしがらないで。", english: "Don't be shy." },

    // カテゴリ: ALTの考えを聞く (Source 36)
    { category: "ALTの考えを聞く", japanese: "クラスのみんなに自己紹介をしてください。", english: "Could you introduce yourself to the class?" },
    { category: "ALTの考えを聞く", japanese: "児童にあなたの国と日本との違いや\n同じところを話していただけませんか。", english: "Could you tell the students about the\ndifferences and similarities between the\ncountry you're from and Japan?" },
    { category: "ALTの考えを聞く", japanese: "今日の授業はどうでしたか", english: "How was today's class?" },
    { category: "ALTの考えを聞く", japanese: "児童にアドバイスしてください。", english: "Please give the students some advice." },

    // カテゴリ: ALTとゲーム等の説明をする (Source 38)
    { category: "ALTとゲーム等の説明", japanese: "私たちにゲームのルールを説明してください。", english: "Please explain the rules of the game." },
    { category: "ALTとゲーム等の説明", japanese: "スキットをやってみせましょう。", english: "Let's demonstrate the skit to the class." },
    { category: "ALTとゲーム等の説明", japanese: "「ポケットに何を持っていますか」と\n私にたずねてください。", english: "Please ask me the question, \"What do you\nhave in your pocket?\"" },
    { category: "ALTとゲーム等の説明", japanese: "あなたはAをしてください。私はBをします", english: "You'll be A, and I'll be B." },
    { category: "ALTとゲーム等の説明", japanese: "やりたい人がいるかたずねてください。", english: "Could you ask for volunteers?" },
    { category: "ALTとゲーム等の説明", japanese: "ゲームをする2人を選んでください。", english: "Please choose two students for the game." },

    // カテゴリ: ALTに依頼する (Source 40)
    { category: "ALTに依頼する", japanese: "もう一度言ってください。", english: "Say it again, please." },
    { category: "ALTに依頼する", japanese: "(もう少し) ゆっくり言ってください。", english: "(A little more) Slowly, please." },
    { category: "ALTに依頼する", japanese: "英語で言ってくれませんか", english: "Could you say that in English?" },
    { category: "ALTに依頼する", japanese: "黒板に絵を描いてください。", english: "Please draw the picture on the blackboard." },
    { category: "ALTに依頼する", japanese: "歩いて回って児童を手伝ってください。", english: "Please walk around and help the students." },
    { category: "ALTに依頼する", japanese: "手伝ってくれますか。", english: "Could you help me?" },
    { category: "ALTに依頼する", japanese: "少し(作業を中断させて)いいですか", english: "May I interrupt you for a moment?" },

    // カテゴリ: ALTに時間について知らせる (Source 43)
    { category: "時間について(ALTへ)", japanese: "時間です。終了しなければなりません。", english: "Time's up. We have to finish now." },
    { category: "時間について(ALTへ)", japanese: "あと5分あります。", english: "We have five more minutes." },
    { category: "時間について(ALTへ)", japanese: "十分な時間はありません。", english: "We don't have enough time." },

    // カテゴリ: スケジュール (打ち合わせ) (Source 45)
    { category: "スケジュール(打ち合わせ)", japanese: "A小学校に9時に来てください。", english: "Please come to A Elementary School by\n9 o'clock." },
    { category: "スケジュール(打ち合わせ)", japanese: "今日のスケジュールを変更しました。", english: "Today's schedule has changed." },
    { category: "スケジュール(打ち合わせ)", japanese: "今日は4時間授業があります。", english: "You have four classes today." },
    { category: "スケジュール(打ち合わせ)", japanese: "2、3、5、6時間目に授業があります。", english: "You have classes in the second, third, fifth\nand sixth periods." },
    { category: "スケジュール(打ち合わせ)", japanese: "[6年生/6年2組]の授業は2時間目です。", english: "[Grade six/Grade six, class two] will be in\nthe second period." },
    { category: "スケジュール(打ち合わせ)", japanese: "今日の授業は40分です。", english: "The classes are forty minutes long today." },
    { category: "スケジュール(打ち合わせ)", japanese: "10分後に授業が始まります。", english: "The class will start in ten minutes." },
    { category: "スケジュール(打ち合わせ)", japanese: "12時25分に授業が終わります", english: "The class will finish at twelve twenty-five." },
    { category: "スケジュール(打ち合わせ)", japanese: "これが [今年/今月] のスケジュールです。", english: "This is the schedule for this [year/month]." },

    // カテゴリ: 場所 (打ち合わせ) (Source 47)
    { category: "場所(打ち合わせ)", japanese: "今日は図書室で授業をします。", english: "Today, we will have class in the library." },
    { category: "場所(打ち合わせ)", japanese: "今日は児童を外に連れて行きましょう。", english: "Let's take the students outside today." },

    // カテゴリ: カリキュラムと授業 (打ち合わせ) (Source 49, 52)
    { category: "授業計画(打ち合わせ)", japanese: "これは5年生のカリキュラムです。", english: "This is the curriculum for the fifth grade." },
    { category: "授業計画(打ち合わせ)", japanese: "これは今日の指導案です。", english: "This is today's lesson plan." },
    { category: "授業計画(打ち合わせ)", japanese: "この単元では [色/買い物] について学びます。", english: "The students are going to learn about\n[colors/shopping] in this unit." },
    { category: "授業計画(打ち合わせ)", japanese: "児童にこれらの基本表現を使ってほしいです。", english: "We want the students to use these basic\nphrases." },
    { category: "授業計画(打ち合わせ)", japanese: "「はい、どうぞ」という表現を教えたいのですが。", english: "I'd like to teach the phrase, \"Here you are.\"" },
    { category: "授業計画(打ち合わせ)", japanese: "この単元の最後には自己紹介ができるように\nなってほしいです。", english: "At the end of this unit we want the students\nto be able to introduce themselves." },
    { category: "授業計画(打ち合わせ)", japanese: "児童は世界中の伝統的な衣装について\n学びたいと思っています。", english: "The students would like to learn about\ntraditional clothes from around the world." },
    { category: "授業計画(打ち合わせ)", japanese: "これらの単語を「使いたい/教えたい」です", english: "I want to [use/teach] these words." },
    { category: "授業計画(打ち合わせ)", japanese: "児童はこれらの単語を知っています。", english: "The students know these words." },
    { category: "授業計画(打ち合わせ)", japanese: "児童はこれらの単語を知りません。\n新出単語です。", english: "The students don't know these words.\nThese are new words." },
    { category: "授業計画(打ち合わせ)", japanese: "どう綴るのですか。", english: "How do you spell it?" },
    { category: "授業計画(打ち合わせ)", japanese: "どう発音するのですか。", english: "How do you pronounce it?" },
    { category: "授業計画(打ち合わせ)", japanese: "児童は “What animals do you like?\"\n\"I like dogs.”の表現を学んでいます。", english: "The students are learning the expressions,\n\"What animals do you like?\" \"I like dogs.\"" },
    { category: "授業計画(打ち合わせ)", japanese: "あなたの国の動物について\n話してもらえませんか。", english: "Could you talk about animals found in your\ncountry?" },
    { category: "授業計画(打ち合わせ)", japanese: "動物の名前を使ったゲームを知っていますか。", english: "Do you know any games using animal names?" },
    { category: "授業計画(打ち合わせ)", japanese: "動物の歌を知っていますか。", english: "Do you know any songs about animals?" },
    { category: "授業計画(打ち合わせ)", japanese: "何か提案はありませんか。", english: "Do you have any suggestions?" },
    { category: "授業計画(打ち合わせ)", japanese: "一緒にクイズをしましょう。", english: "Let's do the quiz together." },
    { category: "授業計画(打ち合わせ)", japanese: "児童に [会話/対話] のモデルを\nやって見せます。", english: "We will show the students a model of the\n[conversation/dialog]." },
    { category: "授業計画(打ち合わせ)", japanese: "歌った後、ゲームをしたいです", english: "After the song, I want to play a game." },
    { category: "授業計画(打ち合わせ)", japanese: "サイモン・セズ・ゲームをした後、\n歌を歌いましょう。", english: "After playing Simon Says, let's sing a song." },
    { category: "授業計画(打ち合わせ)", japanese: "私がピアノを弾いている間、\n児童と歌を歌ってくれませんか。", english: "While I am playing the piano, could you\nsing with the students?" },
    { category: "授業計画(打ち合わせ)", japanese: "あなたがサイモン・セズ・ゲームをしている間\n私は歌の用意をします。", english: "While you are playing Simon Says,\nI will get the music ready." },
    { category: "授業計画(打ち合わせ)", japanese: "この方法でゲームをしてみましょう。", english: "Maybe we can play the game this way." },

    // カテゴリ: 授業の評価 (打ち合わせ) (Source 54)
    { category: "授業評価(打ち合わせ)", japanese: "今日の授業についてどう思いましたか。", english: "What did you think of today's lesson?" },
    { category: "授業評価(打ち合わせ)", japanese: "今日の授業は「とてもよかった/\nそんなによくなかった」です。", english: "Today's lesson was [very good/\nnot so good]." },
    { category: "授業評価(打ち合わせ)", japanese: "もっと(児童に)ゆっくり話す必要があります。", english: "You need to speak more slowly (to the students)." },
    { category: "授業評価(打ち合わせ)", japanese: "もう少し [ゆっくり/大きな声で]\n言っていただけませんか。", english: "Could you speak [more slowly/in a louder\nvoice]?" },
    { category: "授業評価(打ち合わせ)", japanese: "もう少し簡単な英語で言っていただけませんか", english: "Could you speak in simpler English?" },
    { category: "授業評価(打ち合わせ)", japanese: "よいアイディアですが･･･。", english: "That's a good idea, but..." },
    { category: "授業評価(打ち合わせ)", japanese: "はっきりとはわかりません。", english: "I'm not sure." },
    { category: "授業評価(打ち合わせ)", japanese: "大丈夫です。", english: "No problem." },
    { category: "授業評価(打ち合わせ)", japanese: "なるほど。", english: "I see." },
    { category: "授業評価(打ち合わせ)", japanese: "ゲームを変えた方がよいと思います。", english: "I think we should change the game." },
    { category: "授業評価(打ち合わせ)", japanese: "5年生にとってはよくないと思います。", english: "I don't think it's good for the fifth graders." },
    { category: "授業評価(打ち合わせ)", japanese: "6年生にとってはその方がよいと思います。", english: "I think it's better for the sixth graders." },
    { category: "授業評価(打ち合わせ)", japanese: "授業をもっとよくするための提案は\nありませんか。", english: "Do you have any suggestions to make the\nclass better?" },

    // カテゴリ: 次時以降 (打ち合わせ) (Source 57)
    { category: "次時以降(打ち合わせ)", japanese: "これは次の時間の指導案です。", english: "This is the lesson plan for the next class." },
    { category: "次時以降(打ち合わせ)", japanese: "次の時間では新しい活動を始めます。", english: "We will start a new activity in the next class." },
    { category: "次時以降(打ち合わせ)", japanese: "次の時間はいろいろな言葉での挨拶について\n学びます。", english: "In the next class, we will learn about\ngreetings in many languages." },

    // カテゴリ: 教材作成等 (打ち合わせ) (Source 59)
    { category: "教材作成(打ち合わせ)", japanese: "コンピュータでワークシートを\n作ってくださいませんか。", english: "Could you make a worksheet on the\ncomputer?" },
    { category: "教材作成(打ち合わせ)", japanese: "このワークシートをコピーしていいですか。", english: "May I make copies of this worksheet?" },
    { category: "教材作成(打ち合わせ)", japanese: "コンピュータにデータを入力しましょう。", english: "Let's put the data into the computer." },
    { category: "教材作成(打ち合わせ)", japanese: "あなたのUSBメモリースティックを使う前に\n(このように) ウイルスチェックをしてください", english: "Please do a virus check (like this) before\nyou use your USB memory stick." },
    { category: "教材作成(打ち合わせ)", japanese: "練習用のビデオを作りましょう。", english: "Let's make a practice video." },
    { category: "教材作成(打ち合わせ)", japanese: "絵カードを作らなければなりません。", english: "We need to make picture cards." },

    // カテゴリ: 授業以外 (打ち合わせ) (Source 61)
    { category: "授業以外(打ち合わせ)", japanese: "児童と一緒に昼食を食べられますか。", english: "Could you have lunch with the students?" },
    { category: "授業以外(打ち合わせ)", japanese: "この児童には特別な支援が必要です。", english: "This student has special needs." },
    { category: "授業以外(打ち合わせ)", japanese: "この児童は[自閉症です/耳に障害があります/\n目に障害があります]。", english: "This student has [autism/trouble hearing/\ntrouble seeing]." },

    // --- ここからが「授業や学校に関わる表現例」セクションの追加データ ---
// (既存の phrases 配列の末尾に追加してください)

    // カテゴリ: 教材・教具 (Source 63)
    { category: "教材・教具", japanese: "テキスト", english: "textbook" },
    { category: "教材・教具", japanese: "DVDプレーヤー", english: "DVD player" },
    { category: "教材・教具", japanese: "ワークシート", english: "worksheet" },
    { category: "教材・教具", japanese: "OHC", english: "overhead camera" },
    { category: "教材・教具", japanese: "絵カード", english: "picture card" },
    { category: "教材・教具", japanese: "液晶プロジェクター", english: "projector" },
    { category: "教材・教具", japanese: "絵本", english: "picture book" },
    { category: "教材・教具", japanese: "パソコン", english: "PC/personal computer" },
    { category: "教材・教具", japanese: "サイコロ", english: "dice" },
    { category: "教材・教具", japanese: "タブレットパソコン", english: "tablet" },
    { category: "教材・教具", japanese: "指人形", english: "[finger/hand] puppet" },
    { category: "教材・教具", japanese: "USBケーブル", english: "USB cable" },
    { category: "教材・教具", japanese: "指導案", english: "lesson plan" },
    { category: "教材・教具", japanese: "USBメモリースティック", english: "USB memory stick" },
    { category: "教材・教具", japanese: "テープレコーダー", english: "cassette-tape recorder" },
    { category: "教材・教具", japanese: "デジタル教科書", english: "digital textbook" },
    { category: "教材・教具", japanese: "CDプレーヤー", english: "CD player" },
    { category: "教材・教具", japanese: "デジタル絵本", english: "digital picture book" },
    { category: "教材・教具", japanese: "ビデオデッキ", english: "VCR/video cassette recorder" },
    { category: "教材・教具", japanese: "電子黒板", english: "electronic whiteboard" },

    // カテゴリ: 科目等 (Source 66)
    { category: "科目", japanese: "国語", english: "Japanese" },
    { category: "科目", japanese: "外国語活動", english: "foreign language activities" },
    { category: "科目", japanese: "社会", english: "social studies" },
    { category: "科目", japanese: "総合的な学習の時間", english: "period for integrated study" },
    { category: "科目", japanese: "算数", english: "math/mathematics" },
    { category: "科目", japanese: "道徳", english: "moral education" },
    { category: "科目", japanese: "理科", english: "science" },
    { category: "科目", japanese: "特別活動", english: "special activities" },
    { category: "科目", japanese: "音楽", english: "music" },
    { category: "科目", japanese: "クラブ活動", english: "club activities" },
    { category: "科目", japanese: "図画工作", english: "arts and crafts" },
    { category: "科目", japanese: "委員会活動", english: "student committee activities" },
    { category: "科目", japanese: "体育", english: "P.E./physical education" },
    { category: "科目", japanese: "係活動", english: "class monitor duties" },
    { category: "科目", japanese: "家庭", english: "home economics" },
    { category: "科目", japanese: "学級会", english: "homeroom" },
    { category: "科目", japanese: "英語", english: "English" },
    { category: "科目", japanese: "児童会", english: "student council" },

    // カテゴリ: 部屋・場所 (Source 68)
    { category: "部屋・場所", japanese: "教室", english: "classroom" },
    { category: "部屋・場所", japanese: "会議室", english: "meeting room" },
    { category: "部屋・場所", japanese: "理科室", english: "science room" },
    { category: "部屋・場所", japanese: "倉庫", english: "storage room" },
    { category: "部屋・場所", japanese: "音楽室", english: "music room" },
    { category: "部屋・場所", japanese: "トイレ", english: "restroom/washroom" },
    { category: "部屋・場所", japanese: "コンピュータ室", english: "computer room" },
    { category: "部屋・場所", japanese: "男子トイレ", english: "boys' room" },
    { category: "部屋・場所", japanese: "家庭科室", english: "cooking room" },
    { category: "部屋・場所", japanese: "女子トイレ", english: "girls' room" },
    { category: "部屋・場所", japanese: "図書室", english: "library" },
    { category: "部屋・場所", japanese: "手洗い場", english: "hand washing [area/sink]" },
    { category: "部屋・場所", japanese: "体育館", english: "gym" },
    { category: "部屋・場所", japanese: "廊下", english: "hallway" },
    { category: "部屋・場所", japanese: "運動場", english: "playground" },
    { category: "部屋・場所", japanese: "階段", english: "stairs" },
    { category: "部屋・場所", japanese: "プール", english: "swimming pool" },
    { category: "部屋・場所", japanese: "屋上", english: "rooftop" },
    { category: "部屋・場所", japanese: "中庭", english: "courtyard" },
    { category: "部屋・場所", japanese: "1階", english: "first floor" },
    { category: "部屋・場所", japanese: "保健室", english: "nurse's office" },
    { category: "部屋・場所", japanese: "2階", english: "second floor" },
    { category: "部屋・場所", japanese: "放送室", english: "broadcasting room" },
    { category: "部屋・場所", japanese: "玄関", english: "entrance" },
    { category: "部屋・場所", japanese: "職員室", english: "teachers' office" },
    { category: "部屋・場所", japanese: "駐車場", english: "parking lot" },
    { category: "部屋・場所", japanese: "校長室", english: "principal's office" },
    { category: "部屋・場所", japanese: "掲示板", english: "notice board/bulletin board" },

    // カテゴリ: 職員等 (Source 70)
    { category: "職員", japanese: "校長", english: "principal" },
    { category: "職員", japanese: "英語指導助手", english: "ALT/Assistant Language\nTeacher" },
    { category: "職員", japanese: "教頭/副校長", english: "vice principal" },
    { category: "職員", japanese: "学校事務員", english: "school secretary" },
    { category: "職員", japanese: "教師", english: "teacher" },
    { category: "職員", japanese: "教育委員会", english: "board of education" },
    { category: "職員", japanese: "養護教諭", english: "school nurse" },
    { category: "職員", japanese: "指導主事", english: "supervisor of school education" },

    // カテゴリ: 学校行事 (Source 72)
    { category: "学校行事", japanese: "(教師の)朝会", english: "morning meeting for\nteachers" },
    { category: "学校行事", japanese: "文化祭", english: "Cultural Festival" },
    { category: "学校行事", japanese: "(児童の)朝会", english: "morning assembly" },
    { category: "学校行事", japanese: "創立記念日", english: "School Foundation Day" },
    { category: "学校行事", japanese: "職員会議", english: "staff meeting" },
    { category: "学校行事", japanese: "遠足", english: "field trip" },
    { category: "学校行事", japanese: "休み時間", english: "recess" },
    { category: "学校行事", japanese: "修学旅行", english: "school trip" },
    { category: "学校行事", japanese: "始業式", english: "Opening Ceremony" },
    { category: "学校行事", japanese: "授業参観", english: "open [school/house]" },
    { category: "学校行事", japanese: "終業式", english: "Closing Ceremony" },
    { category: "学校行事", japanese: "参観日", english: "Parent Visitation Day/\nOpen Day" },
    { category: "学校行事", japanese: "入学式", english: "Entrance Ceremony" },
    { category: "学校行事", japanese: "研究授業", english: "[observation/demonstration]\nlesson" },
    { category: "学校行事", japanese: "卒業式", english: "Graduation Ceremony" },
    { category: "学校行事", japanese: "給食", english: "school lunch" },
    { category: "学校行事", japanese: "1学期", english: "first term" },
    { category: "学校行事", japanese: "清掃", english: "cleaning" },
    { category: "学校行事", japanese: "2学期", english: "second term" },
    { category: "学校行事", japanese: "家庭訪問", english: "home visit" },
    { category: "学校行事", japanese: "3学期", english: "third term" },
    { category: "学校行事", japanese: "個人懇談", english: "parent-teacher meeting" },
    { category: "学校行事", japanese: "運動会", english: "Sports [Day/Festival]" }

];

// --- グローバル変数 ---
let currentPracticeSet = []; // 現在練習中のフレーズセット（フィルタリング＆シャッフル後）
let currentIndex = 0;       // currentPracticeSet内の現在のインデックス
let isEnglishShown = false; // 英語が表示されているか
let favoriteList = JSON.parse(localStorage.getItem('favorites')) || []; // お気に入りリスト
let learningHistory = JSON.parse(localStorage.getItem('history')) || {}; // 学習履歴
let searchTerm = ''; // 検索語

// --- ユーティリティ関数 ---

// Fisher-Yates (Knuth) シャッフルアルゴリズム
function shuffleArray(array) {
    let newArray = [...array]; // 元の配列をコピーして変更しないようにする
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // 要素を入れ替え
    }
    return newArray;
}

// 学習履歴を更新する関数
function updateHistory(phraseId) {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD形式
    
    if (!learningHistory[phraseId]) {
        learningHistory[phraseId] = [];
    }
    
    learningHistory[phraseId].push(today);
    
    // 学習履歴をローカルストレージに保存
    localStorage.setItem('history', JSON.stringify(learningHistory));
    
    // 学習レベルに応じてUIを更新
    updateLearningLevelUI(phraseId);
}

// 学習レベルに基づいてUIを更新
function updateLearningLevelUI(phraseId) {
    const reviewCount = learningHistory[phraseId] ? learningHistory[phraseId].length : 0;
    const learningLevelEl = document.getElementById('learning-level');
    
    // 学習レベルの決定（回数に応じて）
    let level = 0;
    if (reviewCount >= 10) level = 4;
    else if (reviewCount >= 5) level = 3;
    else if (reviewCount >= 3) level = 2;
    else if (reviewCount >= 1) level = 1;
    
    // レベル表示を更新
    const stars = '★'.repeat(level) + '☆'.repeat(4 - level);
    learningLevelEl.textContent = `学習レベル: ${stars} (${reviewCount}回復習)`;
    learningLevelEl.className = `level-${level}`;
}

// 検索機能
function searchPhrases(term) {
    if (!term) return phrases;
    
    term = term.toLowerCase();
    return phrases.filter(phrase => 
        phrase.japanese.toLowerCase().includes(term) || 
        phrase.english.toLowerCase().includes(term)
    );
}

// --- 初期化と表示関連関数 ---

// カテゴリ選択ドロップダウンを生成
function populateCategorySelector() {
    const categorySelectEl = document.getElementById('category-select');
    categorySelectEl.innerHTML = ''; // 既存の選択肢をクリア
    
    // ユニークなカテゴリ名を取得
    const categories = [...new Set(phrases.map(p => p.category))].sort();

    // 「すべてのカテゴリ」オプションを追加
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'すべてのカテゴリ';
    categorySelectEl.appendChild(allOption);

    // 「お気に入り」オプションを追加
    const favoriteOption = document.createElement('option');
    favoriteOption.value = 'favorites';
    favoriteOption.textContent = 'お気に入り';
    categorySelectEl.appendChild(favoriteOption);

    // 各カテゴリのオプションを追加
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelectEl.appendChild(option);
    });
}

// フレーズを表示する関数 (currentPracticeSet を使用)
function displayPhrase(index) {
    if (currentPracticeSet.length === 0) {
        // 表示するフレーズがない場合
        document.getElementById('category-display').textContent = 'カテゴリ: -';
        document.getElementById('japanese-phrase').textContent = '表示するフレーズがありません。';
        document.getElementById('english-phrase').textContent = '???';
        document.getElementById('phrase-status').textContent = '0 / 0';
        document.getElementById('prev-button').disabled = true;
        document.getElementById('next-button').disabled = true;
        document.getElementById('show-button').disabled = true;
        document.getElementById('favorite-button').classList.add('hidden');
        document.getElementById('learning-level').textContent = '';
        return;
    }

    if (index < 0 || index >= currentPracticeSet.length) {
        console.error("無効なインデックス:", index);
        return; // 範囲外なら何もしない
    }

    const currentPhrase = currentPracticeSet[index];
    document.getElementById('category-display').textContent = `カテゴリ: ${currentPhrase.category}`;
    document.getElementById('japanese-phrase').innerHTML = currentPhrase.japanese.replace(/\n/g, '<br>');
    document.getElementById('english-phrase').textContent = '???';
    isEnglishShown = false;
    document.getElementById('show-button').textContent = '英語を表示';
    document.getElementById('show-button').disabled = false;

    // フレーズ番号/総数を更新
    document.getElementById('phrase-status').textContent = `${index + 1} / ${currentPracticeSet.length}`;

    // ボタンの有効/無効を更新
    document.getElementById('prev-button').disabled = index === 0;
    document.getElementById('next-button').disabled = index === currentPracticeSet.length - 1;
    
    // お気に入りボタンの状態を更新
    const favoriteButton = document.getElementById('favorite-button');
    favoriteButton.classList.remove('hidden');
    
    // 現在のフレーズがお気に入りに入っているかチェック
    const isFavorite = favoriteList.some(fav => 
        fav.japanese === currentPhrase.japanese && 
        fav.english === currentPhrase.english
    );
    
    if (isFavorite) {
        favoriteButton.textContent = '★ お気に入りから削除';
        favoriteButton.classList.add('favorite-active');
    } else {
        favoriteButton.textContent = '☆ お気に入りに追加';
        favoriteButton.classList.remove('favorite-active');
    }
    
    // 学習レベルを更新
    const phraseId = `${currentPhrase.category}-${currentPhrase.japanese}`;
    updateLearningLevelUI(phraseId);
    
    // カードのフリップ状態をリセット
    document.getElementById('phrase-card').classList.remove('flipped');
}

// 英語と日本語を切り替える
function toggleLanguage() {
    if (currentPracticeSet.length === 0) return;
    
    const showButton = document.getElementById('show-button');
    const phraseCard = document.getElementById('phrase-card');
    
    if (!isEnglishShown) {
        // 英語を表示する
        document.getElementById('english-phrase').innerHTML = currentPracticeSet[currentIndex].english.replace(/\n/g, '<br>');
        isEnglishShown = true;
        showButton.textContent = '日本語に戻る';
        
        // 学習履歴に追加（最初に英語を表示したときのみ）
        const currentPhrase = currentPracticeSet[currentIndex];
        const phraseId = `${currentPhrase.category}-${currentPhrase.japanese}`;
        updateHistory(phraseId);
        
        // カードをフリップ
        phraseCard.classList.add('flipped');
    } else {
        // 日本語に戻る
        isEnglishShown = false;
        showButton.textContent = '英語を表示';
        
        // カードをフリップ戻す
        phraseCard.classList.remove('flipped');
    }
}

// フレーズセットを更新する関数
function updatePracticeSet() {
    const categoryValue = document.getElementById('category-select').value;
    
    let filteredPhrases;
    
    if (searchTerm) {
        // 検索語がある場合は検索結果を優先
        filteredPhrases = searchPhrases(searchTerm);
    } else if (categoryValue === 'all') {
        // すべてのカテゴリが選択された場合
        filteredPhrases = phrases;
    } else if (categoryValue === 'favorites') {
        // お気に入りが選択された場合
        filteredPhrases = favoriteList;
    } else {
        // 特定のカテゴリが選択された場合
        filteredPhrases = phrases.filter(p => p.category === categoryValue);
    }

    // フィルタリングされたフレーズをシャッフル
    currentPracticeSet = shuffleArray(filteredPhrases);
    
    // 表示モードによってソート
    const sortMode = document.getElementById('sort-select').value;
    if (sortMode === 'alpha') {
        // アルファベット順
        currentPracticeSet.sort((a, b) => a.english.localeCompare(b.english));
    } else if (sortMode === 'learning-level') {
        // 学習レベル順（低いものから）
        currentPracticeSet.sort((a, b) => {
            const aId = `${a.category}-${a.japanese}`;
            const bId = `${b.category}-${b.japanese}`;
            const aCount = learningHistory[aId] ? learningHistory[aId].length : 0;
            const bCount = learningHistory[bId] ? learningHistory[bId].length : 0;
            return aCount - bCount;
        });
    }
    // ランダム順はすでにshuffleArrayで実現済み

    // インデックスをリセットし、最初のフレーズを表示
    currentIndex = 0;
    displayPhrase(currentIndex);
    
    // フレーズ数を表示
    document.getElementById('total-count').textContent = `${currentPracticeSet.length}件のフレーズ`;
}

// お気に入りを切り替える
function toggleFavorite() {
    if (currentPracticeSet.length === 0) return;
    
    const currentPhrase = currentPracticeSet[currentIndex];
    
    // 現在のフレーズがお気に入りにあるかチェック
    const favoriteIndex = favoriteList.findIndex(fav => 
        fav.japanese === currentPhrase.japanese && 
        fav.english === currentPhrase.english
    );
    
    if (favoriteIndex !== -1) {
        // お気に入りから削除
        favoriteList.splice(favoriteIndex, 1);
        document.getElementById('favorite-button').textContent = '☆ お気に入りに追加';
        document.getElementById('favorite-button').classList.remove('favorite-active');
    } else {
        // お気に入りに追加
        favoriteList.push({...currentPhrase});
        document.getElementById('favorite-button').textContent = '★ お気に入りから削除';
        document.getElementById('favorite-button').classList.add('favorite-active');
    }
    
    // お気に入りをローカルストレージに保存
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
    
    // 現在お気に入りカテゴリを表示中なら、プラクティスセットを更新
    if (document.getElementById('category-select').value === 'favorites') {
        updatePracticeSet();
    }
}

// 音声読み上げ機能
function speakText(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        
        // 利用可能な音声を取得
        const voices = speechSynthesis.getVoices();
        
        // 英語の音声を探す
        const englishVoice = voices.find(voice => voice.lang.includes('en-'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }
        
        speechSynthesis.speak(utterance);
    } else {
        alert('お使いのブラウザは音声読み上げに対応していません。');
    }
}

// --- イベントハンドラー ---

// DOMが読み込まれたときの初期化
document.addEventListener('DOMContentLoaded', function() {
    // 要素への参照を取得
    const categorySelectEl = document.getElementById('category-select');
    const showButton = document.getElementById('show-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const favoriteButton = document.getElementById('favorite-button');
    const speakButton = document.getElementById('speak-button');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const resetButton = document.getElementById('reset-button');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // カテゴリセレクタを生成
    populateCategorySelector();
    
    // カテゴリ選択が変更されたとき
    categorySelectEl.addEventListener('change', updatePracticeSet);
    
    // 「英語を表示」/「日本語に戻る」ボタンの処理
    showButton.addEventListener('click', toggleLanguage);
    
    // 「前へ」ボタンの処理
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            displayPhrase(currentIndex);
        }
    });
    
    // 「次へ」ボタンの処理
    nextButton.addEventListener('click', () => {
        if (currentIndex < currentPracticeSet.length - 1) {
            currentIndex++;
            displayPhrase(currentIndex);
        }
    });
    
    // お気に入りボタンの処理
    favoriteButton.addEventListener('click', toggleFavorite);
    
    // 音声読み上げボタンの処理
    speakButton.addEventListener('click', () => {
        if (isEnglishShown && currentPracticeSet.length > 0) {
            speakText(currentPracticeSet[currentIndex].english);
        }
    });
    
    // 検索入力の処理
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        updatePracticeSet();
    });
    
    // ソート選択の処理
    sortSelect.addEventListener('change', updatePracticeSet);
    
    // リセットボタンの処理
    resetButton.addEventListener('click', () => {
        if (confirm('学習履歴をリセットしますか？')) {
            learningHistory = {};
            localStorage.removeItem('history');
            updatePracticeSet();
        }
    });
    
    // ダークモード切替の処理
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        darkModeToggle.textContent = isDarkMode ? '🌞 ライトモード' : '🌙 ダークモード';
    });
    
    // ダークモード状態の復元
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '🌞 ライトモード';
    }
    
    // カードがクリックされたときに言語を切り替える
    document.getElementById('phrase-card').addEventListener('click', toggleLanguage);
    
    // キーボードショートカット
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            // スペースキーで言語切替
            toggleLanguage();
            e.preventDefault();
        } else if (e.code === 'ArrowLeft') {
            // 左矢印キーで前のフレーズ
            if (!prevButton.disabled) {
                prevButton.click();
                e.preventDefault();
            }
        } else if (e.code === 'ArrowRight') {
            // 右矢印キーで次のフレーズ
            if (!nextButton.disabled) {
                nextButton.click();
                e.preventDefault();
            }
        } else if (e.code === 'KeyF') {
            // Fキーでお気に入り切替
            favoriteButton.click();
            e.preventDefault();
        } else if (e.code === 'KeyS') {
            // Sキーで音声読み上げ
            if (isEnglishShown) {
                speakButton.click();
                e.preventDefault();
            }
        }
    });
    
    // 初期表示（「すべてのカテゴリ」が選択され、シャッフルされる）
    updatePracticeSet();
});