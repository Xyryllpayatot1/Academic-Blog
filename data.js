/* =========================================================
   ARTICLE DATA — transcribed only from the info/*.pptx decks
   ========================================================= */

const P = text => ({ type: 'p', text });
const H = text => ({ type: 'h3', text });
const UL = (...items) => ({ type: 'ul', items });
const OL = (...items) => ({ type: 'ol', items });
const Q = text => ({ type: 'quote', text });
const TAGS = (...items) => ({ type: 'tags', items });
const TABLE = (headers, rows) => ({ type: 'table', headers, rows });
const SEP = { type: 'sep' };
const PROMPT = (label, ...blocks) => ({ type: 'prompt', label, blocks });

const articles = [
    {
        id: 'patterns-of-development',
        number: '01',
        title: 'Patterns of Development in Writing Across Disciplines',
        category: 'writing',
        excerpt: 'Narration · Description · Definition · Exemplification/Classification · Comparison and Contrast · Cause and Effect · Problem-Solution Essay · Persuasion',
        sections: [
            {
                heading: 'After going through this lesson, you are expected to:',
                blocks: [
                    OL(
                        'familiarize yourself with the different writing patterns in paragraph development;',
                        'identify the transitional words and phrases used in the different writing patterns;',
                        'write a short paragraph using certain writing pattern; and',
                        'distinguish the uses and the differences of each writing pattern.'
                    )
                ]
            },
            {
                heading: 'Patterns of Development in Writing across Disciplines',
                blocks: [
                    TAGS('Narration', 'Description', 'Definition', 'Exemplification/Classification', 'Comparison and Contrast', 'Cause and Effect', 'Problem-Solution Essay', 'Persuasion')
                ]
            },
            {
                heading: 'Narration',
                blocks: [
                    P(`A narrative text contains the plot which gives direction in making a story.`),
                    P(`In developing narration, sequential presentation of events plays an important role. Signal words help to create unified thought and to show the transition of events to the next.`),
                    P(`The chronological ordering of events helps to show the reader how the story moves. Most of the common transitional words are first, next, then, after and suddenly. Moreover, it is also important to give specific details in pointing out the direction of the story.`),
                    PROMPT('Read the paragraph and answer the following questions',
                        Q(`Being a transferee is never easy. At first, I was hesitant to come but my mother told me that I would find new friends in Masayahin Senior High School. I would never forget the day I first entered this school, I felt so shy and nervous. I did not know anyone for I was a new Grade 11 student. When I entered my first class looking for a chair to sit in, a boy sitting beside the window sill asked me, “Are you new in this school?” and I answered shyly, “Yes.” Then, he offered me the vacant seat beside him. He was Jasper, an old student in that school. We got along with each other well in our class. We worked on our assignments and school projects. , he slept in our house doing our research work. After a year, we both realized that in many ways we had a lot of similarities in terms of interests in life. In the end, we became best of friends.`),
                        OL(
                            'Where and when did the story happen?',
                            'What transitional devices are used to indicate the chronological order of time?',
                            'What event happened first?',
                            'What does the paragraph tell?',
                            'What sequence is presented in the story'
                        ),
                        UL(
                            'Masayahin Senior High School, during his first class in Grade 11.',
                            'At First, Then, After a year, In the End',
                            'I entered the class and Jasper offered me a seat.',
                            'a story',
                            'in chronological order'
                        )
                    )
                ]
            },
            {
                heading: 'Description',
                blocks: [
                    P(`The use of description plays an important role to elucidate the nature of people, places and things.`),
                    P(`Sensory languages — The kind of words used to describe how the subject looks, sounds, feels, smells or even tastes like. It also concerns how you will arrange the details to provide an image of the scene, the person or the object you are trying to describe in your text.`),
                    P(`Two types of description:`),
                    UL(
                        `Objective description — the writer presents impartial and actual picture of the subject without biases and excluding personal impression of the subject.`,
                        `Subjective description — the writer gives personal impression of what is observed. This is often used in making fiction stories.`
                    ),
                    PROMPT('Read the paragraphs below. Tell whether the description is subjective description or objective.',
                        P(`________________ 1. Sampaloc Lake is an inactive volcanic maar on the island of Luzon, the Philippines. It is the largest of the Seven Lakes of San Pablo, Laguna. Nearly half of the lake's depth has a shallow depression at the bottom, indicating its volcanic origin. It is approximately 104 hectares and 3.5 kilometer boardwalk. The lake is behind San Pablo City Capitol and at the foot of the Doña Leonila Park.`),
                        P(`________________ 2. Sampaloc Lake is one of the best tourist spots in San Pablo. It is where you can bring your friends and loved ones for picnic and bonding. Most of San Pableños jog around the lake and do ride bicycles not only to have morning good exercise but also have fresh air. You can witness the beauty of nature for it is surrounded with mountains.`),
                        TAGS('OBJECTIVE', 'SUBJECTIVE')
                    )
                ]
            },
            {
                heading: 'Definition',
                blocks: [
                    H('Informal definition'),
                    P(`Denotation is the dictionary meaning of the word.`),
                    P(`For example: Rose is a family of prickly shrub with pinnate leaves and showy flowers.`),
                    P(`Connotation is the secondary meaning of a word and not necessarily included in the dictionary. Rather it is how a writer understands a word based on their own personal or consensual experiences.`),
                    P(`For example: A dozen of pink roses is usually given to their beloved ones. Instead of literally referring to flowers, love and romance are connoted.`),
                    H('Formal definition'),
                    P(`Formal definition consists of three principal parts: the species (WORD), Genus (CLASS) + Differentia. The WORD is the name of the object, process, or concept defined. This is usually followed by “is” and “are” and the CLASS or general group to which the objects belongs.`),
                    P(`For example: Skimming (species) is a reading technique (class) of allowing the eyes to travel over a page very quickly, stopping only here and there to gain an idea (differentia).`),
                    P(`Common methods used in paragraph development:`),
                    UL(
                        'By stating its characteristics',
                        'By function',
                        'By what it is not',
                        'By what it is similar to',
                        'By examples',
                        'By origin of word or etymology',
                        'By its effect'
                    )
                ]
            },
            {
                heading: 'Exemplification and Classification',
                blocks: [
                    P(`Exemplification (or illustration) is the most common and effective pattern to explain an idea or point. In developing this kind of paragraph, the writer develops a general statement – the topic sentence, with one or more examples to support it.`),
                    P(`Transitional expressions: for instance, namely, to specify, to clarify, to illustrate, for example, in short, as an example.`),
                    P(`Classification is used when a writer needs to sort out or arrange subjects to groups or categories based on their common and shared characteristics.`),
                    P(`Transitional expressions: classified as, one kind, the last group, another kind, another, final type, the first category, are categorized as, the next part.`),
                    TABLE(['Methods', 'Examples'], [
                        ['By stating its characteristics', 'San Pablo City is one of the oldest towns in the Philippines and today, it is known as one of the first-class cities in the province of Laguna. It is also called the City of Seven Lakes namely: Bunot Lake, Calibato Lake, Mohicap Lake, Palakpakin Lake, Pandin Lake, Sampaloc Lake, and Yambo lake. These seven freshwater lakes are crater form of a steam-blast eruption from Mt. Cristobal.'],
                        ['By function', 'In this time of global crisis, everyone is responsible for their actions, such as following the precautionary measures given by the health experts to avoid the spread of the virus.'],
                        ['By what it is not', 'Far from the normal situations that we had before, the pandemic makes each one of us skip buying unnecessary items.'],
                        ['By what it is similar to', 'Jollibee and McDonalds both offer savory chicken and delicious pasta that children love.'],
                        ['By Examples', 'The opening of the classes for School Year 2020 -2021 amidst the pandemic is a great challenge to the Department of Education. They continue researching different alternative ways of teaching and learning to be implemented in schools such as online learning, modular learning, and lastly learning from TV shows and radio programs.'],
                        ['By origin of word or etymology', 'Writers around the world define literature in different ways. The origin of the word literature is derived from the Latin word Litera which means letter.'],
                        ['By its effect', 'Due to the global pandemic, specifically COVID-19, the world embraces the new normal. People have become more conscious about sanitation and hygiene. They now learn physical distancing in public places. And, most of the people stay at home either working or developing new hobbies and exploring new things.']
                    ])
                ]
            },
            {
                heading: 'Comparison and Contrast',
                blocks: [
                    PROMPT('Choose the word/s that do/does not belong on each line then write a category name for each group.',
                        OL(
                            'German Shepherd, Golden Retriever, Persian Siamese, Siberian Husky = ___________________',
                            'on land, by water, by air, by bus = ___________________',
                            'carrot, cabbage, radish, onion = ___________________',
                            'jazz, rock, pop, ballet = ___________________',
                            'Coins, Dollar, Yen, Franc = ___________________'
                        ),
                        TAGS('Dog Breeds', 'Mode of Transport', 'Root crops', 'Musical Genres', 'Currency')
                    ),
                    P(`Comparison in writing discusses elements that are similar.`),
                    P(`Contrast in writing discusses elements or ideas that are different.`),
                    P(`A compare-and-contrast essay analyzes two subjects comparing them, contrasting them, or both.`),
                    Q(`My sisters are as different as yin and yang in terms of personality, appearance and intelligence. Tina, the middle child in the family, prefers staying at home than going out with her friends. She is slim, petite and has dark skin. As she is not sociable, she finds friends with the characters from the books she reads most of the time. In addition, she is very clever in subjects like Math and Science which made her graduate with Highest Honors from Senior High School. In contrast, my youngest sister, Joni, is the opposite. She has an outgoing and friendly personality. There is never a dull moment as she is always ready with stories to tell. She is tall with a round plump face and fair skin. Being the youngest in the family, she is often asked to perform during family gatherings since she sings and dances well. My sisters may be different from each other but they adore one another.`)
                ]
            },
            {
                heading: 'Cause and Effect',
                blocks: [
                    P(`Cause and Effect is a text development pattern which explains why something happens. It also states what results a particular event produces. It usually gives a statement emphasizing the cause and another emphasizing the effect.`),
                    P(`The following guide questions can be used for cause-effect development:`),
                    UL('Why did it happen?', 'What caused it?', 'What are the effects?', 'How is it related to something else?'),
                    P(`Further, in developing your texts you can use signal words like as a consequence of, as a result of, because, because of, now that and since to express cause while accordingly, consequently, hence, so, therefore, and this resulted in to signify effects.`),
                    PROMPT('Put a check (✓) if the item is suited for a cause-and-effect text or a cross (x) if not.',
                        OL(
                            'How to play drums',
                            'Impact to technology in education',
                            'Importance of daily reading habit',
                            'Increased drop-out rate in a school.',
                            'The act of kindness'
                        ),
                        TAGS('X', 'X', '✓', '✓', '✓')
                    )
                ]
            },
            {
                heading: 'Problem-Solution',
                blocks: [
                    P(`A problem/solution essay presents a problem, usually discussing several aspects of the problem, then concludes by discussing solutions to the problem. The problem may be addressed in the following ways:`),
                    UL(
                        `Effects only — Describe the problem only in terms of its effects. Use examples.`,
                        `Causes and effects — Outline the causes of the problem. Discuss solutions in terms of preventive measures.`,
                        `Extended example — After a topic sentence, illustrate the problem by using an extended example (through a story or an anecdote from your introduction).`
                    ),
                    H('Here are some ways to present solutions'),
                    UL(
                        `Preventive measures — Ways to prevent the problem from occurring in the first place. For example: How to prevent Covid-19.`,
                        `A series of steps — Suggest the easiest and most obvious solution first, but if that doesn’t work, try something else, etc. For example: if you have a neighbor who does not wear mask nor practice social distancing, you might first talk to him/her; if that doesn’t work, arrange for a mediator; etc. (a last resort might be to call the police).`,
                        `Advice — Give some advice and helpful hints.`,
                        `A choice of solutions — Include solutions that have already been tried, have been unsuccessful, and new solutions which you are proposing. The solutions may be presented in various ways and you have to think about which way would be the most appropriate for the particular problem you are discussing.`
                    ),
                    P(`The following transitional devices can also help you develop your text.`),
                    TABLE(['Introduction', 'Middle Section/ Body', 'Conclusion'], [
                        ['Nowadays…\nIt is a common trend that…\nSociety is becoming increasingly concerned about…', 'For instance…\nSuch as/like…\nNamely…', 'In conclusion…\nTo conclude…\nTo sum up…']
                    ])
                ]
            },
            {
                heading: 'Persuasion',
                blocks: [
                    P(`Persuasive text can be in the form of an argument, discussion, exposition, review or even an advertisement.`),
                    P(`State the issue. This will serve as a background information about the topic.`),
                    P(`Then, it should be followed by a clear, strong and specific argument.`),
                    P(`An argument is one’s claim or position that can either support or reject the issue previously stated.`),
                    P(`Arguments shall be supported with a well-researched evidences, which will give details on how and why it supports the argument. Evidences can be factual, logical, statistical or anecdotal in nature.`),
                    P(`3. A conclusion restating the main argument of the text will be the end of the text. This will be your final statement to persuade your readers.`),
                    P(`Some guide questions in constructing a persuasive text include:`),
                    UL(
                        'What is the issue?',
                        'What is your position or opinion?',
                        'What is the opposing position/opinion?',
                        'What are some reasons for your position/opinion?',
                        'What are some cases or examples that support this?'
                    ),
                    PROMPT('Read the text below and identify the issue, the argument/s and conclusion.',
                        Q(`When we consider the ubiquity of cellphones, iPods, personal computers and the internet, it’s easy to see how science (and the technology to which it leads) is woven into the fabric of our day-to-day activities. When we benefit from CT scanners, M.R.I. devices, pacemakers and arterial stents, we can immediately appreciate how science affects the quality of our lives. When we assess the state of the world, and identify looming challenges like climate change, global pandemics, security threats and diminishing resources, we don’t hesitate in turning to science to gauge the problems and find solutions.`),
                        Q(`And when we look at the wealth of opportunities hovering on the horizon— stem cells, genomic sequencing, personalized medicine, longevity research, nanoscience, brain-machine interface, quantum computers, space technology—we realize how crucial it is to cultivate a general public that can engage with scientific issues; there’s simply no other way that as a society we will be prepared to make informed decisions on a range of issues that will shape the future.`)
                    )
                ]
            },
            {
                heading: 'Quiz No. 1',
                blocks: [
                    PROMPT('Part i: identification',
                        OL(
                            '_______ is/are used to describe how the subject looks, sounds, feels, smells, or even tastes like. It also concerns how you will arrange the details to provide an image of the scene, the person or the object you are trying to describe in your text.',
                            'This text can be in the form of an argument, discussion, exposition, review or even an advertisement.',
                            'What type of description presents an impartial and actual picture of the subject without biases and excluding personal opinions of the subject?',
                            'What type of description gives a personal impression of what is observed?',
                            'This writing pattern contains the plot which gives direction in making a story.',
                            'It is the most common and effective pattern to explain an idea or point. In developing this kind of paragraph, the writer develops a general statement- the topic sentence, with one or more examples to support it.',
                            'It is the secondary meaning of a word and is not necessarily included in the dictionary. Rather it is how a writer understands a word based on their own personal or consensual experiences.',
                            'This writing pattern analyzes two subjects comparing them, contrasting them, or both.',
                            'It is used when a writer needs to sort out or arrange subjects into groups or categories based on their common and shared characteristics.',
                            'It is a text development pattern which explains why something happens.'
                        )
                    ),
                    PROMPT('Part iI: MODIFIED TRUE OR FALSE',
                        OL(
                            'In developing narration, sequential presentation of events plays an important role.',
                            'The transitional device nowadays is used in conclusion.',
                            'Comparison as a pattern of development of writing makes you associate similar things or processes by grouping them into classes or categories.',
                            'Arguments shall be supported with a well-researched evidence, which will give details on how and why it supports the argument.',
                            'Informal definition consists of three principal parts: the species, genus, and differentia.'
                        )
                    ),
                    PROMPT('Part IiI: TEXT ANALYSIS',
                        Q(`In front of me on the table sat a beautiful pure white bowl, simplistic in design, hiding a decadent surprise inside. In the bowl was hidden something that was not so pure, however, the irresistible indulgence was worth every calorie that I knew it contained. As I looked inside I saw on the bottom of the bowl a hot, tender brownie loaded with macadamia nuts. I knew from past experience that the nuts had a creamy and smooth texture, almost like white chocolate. On top of the brownie were two firmly packed scoops of ice cream, laying side by side, each one a different flavor. © 2005 Kelly Cofske`),
                        Q(`3. One of my favorite family experiences was when I went to see Anne Frank’s (a Jewish victim of the Nazi persecution during World War II) hideout in Amsterdam, Holland. I had read Anne’s published diary when I was younger, so I was extremely thrilled to actually have the chance to see where she and her family hid from the Germans for so many months. I walked up the stairs of an apartment building and into a room with only a bookshelf in it. From what I remembered from reading the diary, there was a doorknob behind the books. I found the doorknob and turned it and there was the secret annex. When I stepped into the room behind the bookshelf, I felt as if I had stepped back into history. I found Anne’s room still with pictures of her favorite celebrities on her walls. © Denise Rafferty`),
                        Q(`Deja vu is a French word meaning "already seen", it has also been described as a feeling or experience that one has seen or done something before. For example, you are waiting in line to check out at the grocery store and the lady behind you asks you to hand her a pack of gum. Suddenly you get an overwhelming feeling that you have been there in that exact same spot, talking to the same lady, even the same brand of gum. Even though everything seems so familiar you know there is no way that could have happened before. Copyright 2005 Courtney Ming`),
                        Q(`5. Sometimes fear can be a great motivator. Once when I was in high school, I tried out for a part in the school play. I was surprised and thrilled when I was given one of the leads. Never for a moment, however, did I consider how long my part was or how hard I would have to work to memorize it. All I could think of was how much attention I was getting from my friends. I even ignored the warnings of the play’s director who told me I would be in trouble if I did not begin to memorize my lines. The reality of my situation finally sank in during our first dress rehearsal when I stumbled all over my lines, and the rest of the cast laughed at me. That night, and for the two weeks leading up to the play, I spent hours going over my lines. Miraculously, I got through the first night of the play without missing (at least obviously missing) many of my lines. As a result of that experience, I learned two things: first that I could do almost anything if I was frightened enough and second, that I would never try out for another play. Jerry Doyle (student)`),
                        Q(`6. Deforestation is a serious problem because forest and trees are not just pretty to look at, they do an important job making the earth´s environment suitable for life. They clean the air, store water, preserve oil, and provide homes for animals. They also supply food, fuel, wood products, and paper products for humans. In the past fifty years, more than half of the world´s rainforests have been destroyed. Today, the forest of the world are being deforestation continues, the world´s climate may change, floods may become more common, and animals will die.\nOne solution to the problem of deforestation is to use less paper. If you use less paper, fewer trees will be cut for paper making. How can you use less paper? One answer is to reduce your paper use by using both sides of the paper when you photocopy, write a letter, or write an essay. A second answer is to reuse old paper when you can, rather than using a new sheet of paper. The backs of old envelopes are perfect for shopping list or phone messages, and you write a rough draft of an essay, write it on the back of something else. A final answer is to recycle used paper products instead of throwing them away. Most schools, offices, and districts have some kind of recycling center. If you follow "the tree Rs"- reduce, reuse, and recycle-you can help save the world´s forest.`),
                        Q(`4. There are three different types of rock music, alternative rock, classic rock, and hard rock, also known as metal. Alternative rock features a steady bass drum laying down the beat, with easy flowing guitar riffs over the top. The bass line is toned town, and the lyrics are sung with intensity an authority. Depending on the song, the guitars can either be acoustic guitars or electric guitars. Classic rock combines a steady driving bass drum sound, with high snare overtones, steady and often repeating guitar riffs, and an intensive bass line. The guitars are more often than not all electric guitars, and distortion is rarely used. The lyrics are sung with style and enthusiasm. Hard rock, or metal, features a hard rolling bass drum with an abundant amount of cymbal work. This style of rock uses several electric guitars with heavy distortion to bring a very intense sounThe lyrics aren’t really sung so much as screamed. It doesn’t matter what your preference is, each different style of rock music is unique d. A hard, intense, driving bass line rounds out the style. on its own. © 2005 Kristian Anderson`),
                        Q(`8. As broad as their sounds are, there are several very distinct similarities and differences between electric and acoustic guitars. For instance, both utilize the use of a body for the neck to attach to and a neck with frets for finger placement. The strings attach to the lower end of the body and go all the way to the head, or the top of the neck. They both use strings that vary in gauge, or size, which are vital to produce sound when they are picked, hammered on, or strummed as a group. Similarly, each is tuned in the same manner to produce the proper tone desired. An acoustic guitar needs no amplifier to make its sound loud enough to be heard. An acoustic guitar uses the body of the guitar as its amplifier.`),
                        Q(`7. Laughter is one of the greatest healing devices known to man. Laughter is powerful and can help people in many different ways. It has the power to cure something as little as a bad day or to heal the wounds of a terminally ill person. Laughing has helped create the smile which is the universal sign of well-being. Generally, individuals who do not laugh live miserably and have unhappy lives. Dr. Robert Holden found out that smiling and laughing releases endorphins in the brain which gives people an overall happy well-being. Using comedy, many doctors have stimulated the healing process in manic depressants and fatally ill patients giving them hope and ambition. In many clinics, laughter is being used in replacing antidepressants and reduces the need for pain killers.(Dr. Gael Crystal). Take comedians for example, they usually live long and happy lives. Putting a smile on faces and laughs in souls is what makes life complete. Laughter helps heal people and brightens spirits for a better and healthier life. Laughing is a sign of joy and hope and keeps people normal and the world happy. Using the techniques of laughter and happiness is the best medicine known to man. Laughter is the universal sign of well-being and happiness within health. Laughing brightens the spirit and heals the minds and bodies of people who allow it to overcome them. So, try a smile and laugh on for size and live a longer happier life with loved ones. © Jace Oeleis 2005`)
                    ),
                    PROMPT('Part IV: SUBJECT-VERB AGREEMENT',
                        OL(
                            'Sheena and her sister (is, are) here to support you.',
                            'The seven children from China (has been/ have been) selected for the final round of the quiz.',
                            'One of the plates (is, are) broken.',
                            'A lot of food choices (was, were) given.',
                            'My parents (live, lives) in New Zealand.',
                            'Don’t you think 4 days (is, are) little too long?',
                            'Neither the children, nor the teacher (has/have) reached yet.'
                        )
                    )
                ]
            }
        ]
    },

    {
        id: 'well-written-text',
        number: '02',
        title: 'Properties of a Well-Written Text',
        category: 'writing',
        excerpt: 'Organization · Coherence and Cohesion · Language Use · Mechanics',
        sections: [
            {
                heading: 'After going through this lesson, you are expected to:',
                blocks: [
                    OL(
                        'determine the beginning, middle, and end of the story read;',
                        'write the episodes of your life from childhood to young adulthood using a graphic organizer;',
                        'organize ideas using proper transitional devices;',
                        'construct a coherent and cohesive paragraph;',
                        'determine the essence of proper language use in written texts;',
                        'evaluate a written text based on the appropriateness of language use;',
                        'utilize writing prowess through practice skills in grammar; and',
                        'use proper mechanics in writing such as spelling, punctuation, capitalization, and paragraph development.'
                    )
                ]
            },
            {
                heading: 'Paragraph',
                blocks: [
                    P(`A paragraph is a series of sentences that are organized, coherent, and are all related to a single topic.`),
                    TABLE(['Introduction', 'Body', 'Conclusion'], [
                        ['Topic sentence\nBackground information\nProvides a transition', 'Follows the introduction\nDiscusses the controlling idea, using facts, arguments, analysis, examples, or other information.', 'Summarizes the connections between the information discussed in the body of the paragraphs and the paragraph’s controlling idea']
                    ]),
                    H('Types of Sentence in a Paragraph'),
                    UL(
                        `Topic Sentence — This states the main topic of the paragraph and the controlling idea. When writing the topic sentence, try to state the main point of the paragraph as clearly and as accurately as possible. Do not make the topic sentence too general or too specific.`,
                        `Supporting Sentences — These develop the topic sentence. Supporting details should be drawn from a variety of sources and based on research, experiences, etc. plus the writer's own analysis. Using a combination of different supports is the most common and effective way to strengthen the paragraph.`,
                        `Concluding Sentence — This signals the end of the paragraph and leaves the reader with important points to remember, but is often unnecessary.`
                    )
                ]
            },
            {
                heading: 'Properties of a Well-Written Text',
                blocks: [
                    TAGS('Organization', 'Coherence and Cohesion', 'Language Use', 'Mechanics')
                ]
            },
            {
                heading: 'Organization',
                blocks: [
                    Q(`“A well-organized piece of writing is not only clear but also logical and aesthetic. Existence of organizational markers and coherent flow of ideas are typically the focus in evaluation of writing.”`),
                    P(`-Dayagbil 2016, 63-64`),
                    P(`Organization — also known as arrangement, is achieved when ideas are logically and accurately arranged with focus on the arrangement of ideas, incidents, evidence, or details in a definite order in a paragraph, essay, or speech.`),
                    P(`Check the following paragraph arrangements and the words which are useful in securing in each of them:`),
                    TABLE(['Arrangement', 'Useful words'], [
                        ['1. Chronological Order', 'first, second, later, before, next, as soon as, after, then, finally, meanwhile, following, last, during, in, on, until'],
                        ['2. Order of Importance', 'less, more, primary, next, last, most important, primarily, secondarily'],
                        ['3. Spatial Order', 'above, below, beside, next to, in front of, behind, inside, outside, opposite, within, nearby'],
                        ['4. Definition Order', 'is, refers to, can be defined as, means, consists of, involves, is a term that, is called'],
                        ['5. Classification', 'classified as, comprises, is composed of, several, varieties of, different stages of, different groups that'],
                        ['6. Process', 'first, next, then, following, after that, last, finally'],
                        ['7. Cause and Effect — Causes', 'because, for, since, stems from, one cause is, one reason is, leads to, causes, creates, yields, due to, breeds, for this reason'],
                        ['7. Cause and Effect — Effects', 'consequently, results in, one result is, therefore, thus, as a result, hence'],
                        ['8. Comparison and Contrast — Similarities', 'both, also, similarly, like, likewise, too, as well as, resembles, correspondingly, in the same way, to compare, in comparison, share'],
                        ['8. Comparison and Contrast — Differences', 'unlike, differs from, in contrast, on the other hand, instead, despite, nevertheless, however, in spite of, whereas, as opposed to'],
                        ['9. Listing', 'the following, several, for example, for instance, one, another, also, too, in other words, first, second, numerals (1, 2, 3...), letters (a, b, c...)'],
                        ['10. Clarification', 'in fact, in other words, clearly'],
                        ['11. Summary', 'in summary, in conclusion, in brief, to summarize, to sum up, in short, on the'],
                        ['12. Example', 'for example, for instance, to illustrate'],
                        ['13. Addition', 'furthermore, additionally, also, besides, further, in addition, moreover, again']
                    ])
                ]
            },
            {
                heading: 'Coherence and Cohesion',
                blocks: [
                    PROMPT('Set A. Number the sentences to form a well-structured paragraph.',
                        OL(
                            'A. I knew that we will go to their house to celebrate her birthday but during that time, I was still in our school because of my training for campus journalism.',
                            'B. I talked to her and said sorry for what I had done and I explained my reasons for not attending her birthday. At last, I was still thankful to her for understanding my situation.',
                            'C. It was 2:00 o’clock in the afternoon when Angelita called me over the phone and said that she was waiting for me at 7/11 store together with our other friends.',
                            'D. It’s hard for me to choose what should I prioritize but I ended up staying in school.',
                            'E. On the next day, I saw her inside our room and it seemed that she did not want to look at me.'
                        ),
                        TAGS('1', '2', '3', '4', '5')
                    ),
                    PROMPT('Set B. Combine the sentences in each set into two clear sentences. Add a transitional word or phrase to the second to show how it relates to the first.',
                        P(`Retirement should be the reward for a lifetime of work. It is widely viewed as a sort of punishment. It is a punishment for growing old.`),
                        P(`Retirement should be the reward for a lifetime of work. Instead, it is widely viewed as a sort of punishment for growing old.`),
                        P(`There are differences in English performance between boys and girls. These differences cannot be attributed simply to differences in innate ability. If one were to ask the children themselves, they would probably disagree.`),
                        P(`There are differences in English performance between boys and girls, but these differences cannot be attributed simply to differences in innate ability. If one were to ask the children themselves, they would probably disagree.`)
                    ),
                    P(`Coherence and cohesion are two basic features that facilitate textual continuity.`),
                    H('Coherence'),
                    P(`Basically, coherence refers to the rhetorical aspects of your writing, which include developing and supporting your argument (e.g. thesis statement development), synthesizing and integrating readings, organizing and clarifying ideas.`),
                    P(`Coherence means the connection and organization of ideas in a text to create unity.`),
                    P(`To achieve coherence, every good paragraph must have UNITY or oneness of idea. Sentences in a paragraph are unified and directed by a topic sentence.`),
                    H('Cohesion'),
                    P(`Cohesion in writing means unifying ideas by binding words, phrases, sentences and paragraphs, thus, show relationships and smooth “text flow”.`),
                    P(`While coherence focuses on the overall (macro) structure of the essay, cohesion is more specific. It pays attention to links between words and sentences.`),
                    H('Transitional Devices (also called conjunctive adverbs or adverbial conjunctions)'),
                    TABLE(['Category', 'Examples'], [
                        ['addition', 'again, also, and, and then, equally important, finally, first, further, furthermore, in addition, in the first place, last, moreover, next, second, still, too'],
                        ['comparison', 'also, in the same way, likewise, similarly'],
                        ['concession', 'granted, naturally, of course'],
                        ['contrast', 'although, yet, at the same time, but at the same time, despite that, even so, even though. for all that, however, in contrast, is spite of, instead, nevertheless, notwithstanding, on the contrary, on the other hand, otherwise, regardless, still, though'],
                        ['emphasis', 'certainly, indeed, in fact, of course'],
                        ['example/ illustration', 'after all, as an illustration, even, for example, for instance, for conclusion, indeed, in fact, in other words, in short, it is true, namely, specifically, that is, to illustrate, thus, truly'],
                        ['summary', 'all in all, altogether, as has been said, finally, in brief, in conclusion, in other words, in particular, in short, in simpler terms, in summary, on the whole, that is, therefore, to summarize']
                    ]),
                    PROMPT('Combine each pair of sentences by changing one sentence to a subordinate clause. Use an appropriate subordinating conjunction to link the ideas.',
                        P(`Sample: I got tired. It was so late.`),
                        P(`Answer: I got tired because it was so late.`),
                        OL(
                            'I was studying my lesson. I heard a loud crash in the next room.',
                            'I pulled the blankets on my bed. I was afraid.',
                            'I finally got up from where I was sitting. I heard the cat’s meow.'
                        ),
                        P(`For items 4-5, continue the story by completing the sentences.`),
                        OL(
                            'I went to get a broom so that __________________________.',
                            'I did not get very much sleep that night because ______________.'
                        )
                    )
                ]
            },
            {
                heading: 'Language Use',
                blocks: [
                    PROMPT('Study the conversation of three students during the first day of school. Identify which is very formal, formal and informal?',
                        Q(`What’s up everyone! A newbie here! — ARNOLD`),
                        Q(`Man, cool! — GREG`),
                        Q(`If you would want me to be part of the circle it would be my honor to take part of this friendship. — ARNULFO`),
                        Q(`Excuse me, yes we can be friends and it’s a pleasure for me.`)
                    ),
                    P(`There are five major issues with appropriate language that should be avoided in an effective and well-written text, as identified by Purdue Online Writing Lab 2020:`),
                    OL(
                        `The formality of the language one uses should depend on how formal the situation is and how the writer and the reader are related to one another.`,
                        `Jargons or specialized language used by groups of individuals in the same field, should only be used if the target readers belong to the same group.`,
                        `Slangs and idioms should be avoided. Slangs are words, phrases, or expressions that do not literally mean what they express (like “frenemy” to describe someone who is both a friend and an enemy) while idioms or expressions whose meaning is different from the meanings of the individual word it contains (like “to kill two birds at one stone”, which means to get two things done with a single action).`,
                        `Euphemisms or words that veil the truth shall also be avoided. Examples of which are “vertically challenged” for someone who is short; “passed away” instead of died, and other deceitful language.`,
                        `Avoid using any biased language including those associated with any racial, ethnic, group, or gender.`
                    ),
                    P(`Hence, an effective language can be characterized as:`),
                    UL(
                        'Concrete and specific, not vague and abstract',
                        'Concise, not verbose',
                        'Precise and clear, not obscure',
                        'Constructive, not destructive',
                        'Appropriately formal, not slang'
                    )
                ]
            },
            {
                heading: 'Mechanics',
                blocks: [
                    P(`In this lesson, you will utilize your writing prowess through practice skills in grammar.`),
                    P(`You are also expected to learn the mechanics in writing such as spelling, punctuation, capitalization, and paragraphs in explaining a position in an essay.`),
                    P(`Mechanics is essential in all types of writing because it describes the technical aspects of writing. It also serves as a road sign to guide learners like you on how to use words appropriately in terms of conventions such as spelling, punctuation, capitalization, and others.`),
                    P(`1`),
                    Q(`I can never forget my class last school year because they were so active and responsible in class they always worked together well in doing their assignments performing group and individual tasks submitting their projects on time keeping the classroom spic and span. They are worth remembering for everything that they did inside and outside the campus they always helped one another they seldom got themselves in conflict with anyone in the class.`),
                    P(`2`),
                    Q(`My class is worth remembering. They were so active and responsible. They always worked together well in doing their assignments, performing group and individual tasks, submitting their projects on time, and keeping the classroom spic and span. Everything that they did inside and outside the campus was worth remembering. They always helped one another. Also, they seldom got themselves in conflict with anyone in the class.`),
                    PROMPT('Add the correct end punctuation to complete each sentence.',
                        OL(
                            'What is the name given to the 2019 novel corona virus ____',
                            'People of all ages can be infected by the new coronavirus-2019-nCoV ____',
                            'Take steps to protect yourselves from the virus, like following good respiratory hygiene ____',
                            'What a terrible and dangerous disease is COVID-19 ____'
                        ),
                        TAGS('?', '.', '.', '!')
                    )
                ]
            },
            {
                heading: 'Quiz #2',
                blocks: [
                    PROMPT('PART I: IDENTIFICATION',
                        OL(
                            'What type of sentence states the main topic of the paragraph and the controlling idea?',
                            'What do you call the words, phrases, or expressions that do not literally mean what they express (e.g., frenemy)?',
                            'Which of the following veils the truth (e.g., use “passed away” instead of died)?',
                            'There are two basic features that facilitate textual continuity. Which feature means unifying ideas by binding words, phrases, sentences, and paragraphs, thus, show relationships and smooth “text flow”?',
                            'What property of a well-written text is essential in all types of writing because it describes the technical aspects of writing?',
                            'What do you call the series of sentences that are organized, coherent, and are all related to a single topic?',
                            '“A well-organized piece of writing is not only clear but also logical and aesthetic. Existence of organizational markers and coherent flow of ideas are typically the focus in evaluation of writing.” What is the name, year, and page of the citation used in this article?',
                            'Who identified the five major issues with appropriate language that should be avoided?',
                            'It is also known as an arrangement of ideas logically and accurately.'
                        )
                    ),
                    PROMPT('PART II: MODIFIED TRUE OR FALSE',
                        OL(
                            'Supporting sentence develop the topic sentence.',
                            'Cohesion means the connection and organization of ideas in a text to create unity.',
                            'Idioms are words, phrases, or expressions that do not literally mean what they express. (Like frenemy)',
                            'Avoid using any biased language, including those associated with any racial, ethnic, group, or gender.'
                        )
                    ),
                    PROMPT('PART III: ENUMERATION (In order)',
                        OL('Types of sentences in a paragraph.', 'Properties of a well-written text.')
                    )
                ]
            }
        ]
    },

    {
        id: 'nature-of-research',
        number: '03',
        title: 'Nature of Research: Characteristics, Types, and Approaches',
        category: 'research',
        excerpt: 'What is Research · Importance of Research · Characteristics of Research · Purposes of Research · Types of Research · Approaches to Research',
        sections: [
            {
                heading: 'What is Research?',
                blocks: [
                    OL(
                        `Research is defined as the scientific investigation of phenomena which includes collection, presentation, analysis and interpretation of facts that lines an individual‘s speculation with reality.`,
                        `Solutions to problems must be based on knowledge not on mere beliefs, guesses or theories.`
                    )
                ]
            },
            {
                heading: 'Importance of Research',
                blocks: [
                    H('1. The research aims for truth'),
                    P(`Research is about establishing truth based on evidence or data. We conduct a study to seek for truth.`),
                    P(`Research provides us an explanation or solution to particular problem based on truth.`),
                    H('2. Research improves the quality of human life'),
                    P(`All of the technological advancements are brought by different researches (Gupta 2018).`),
                    P(`Without the people who dedicated their lives for the sake of humanity, we will not have this kind of life.`),
                    P(`Through research, it improves our standard of living.`),
                    H('3. Research saves a life'),
                    P(`Through the course of human history, research has proven its worth and roles in our lives.`),
                    P(`Research on understanding the disease, development of vaccines, and medication will save us. Nonetheless, researchers are doing their best working day and night to have a medical remedy for this pandemic. Later, research will succeed and will continue to provide us a safer life.`),
                    H('4. Research gathers the necessary information'),
                    P(`Conducting research implies gathering necessary data to explain your problem and to answer your particular questions.`),
                    H('5. Research explores humanity'),
                    P(`Research likewise deals with the investigation of culture to understand and to appreciate others' practices, and beliefs (Zion and Kozleski 2005). The way we understand others is the result of a long study of different individuals to provide us explanations about group or individual culture. Because of this, we can now related, understand, and respect others.`)
                ]
            },
            {
                heading: 'Characteristic of Research',
                blocks: [
                    OL(
                        `1. Research should be systematic. The researcher needs to carry out a series of interrelated steps in conducting the study. Such procedure must follow a well-planned, sequential and organized structure from beginning to end.`,
                        `The research paper is divided into macrosystem and microsystem. The former refers to different chapters labeled with main headings, while the latter consists of various elements detailing the contents of each part.`,
                        `2. Research should be objective. The researcher needs to present information that are purely based on truths. It should always be anchored on the factual basis in which the research work is founded, thus being free from any bias or personal opinion.`,
                        `3. Research should be feasible. The researcher needs to consider the possibility and practicality of conducting the proposed study. All significant factors like time, budget and access to resources must be analyzed to determine if the research can actually be done.`,
                        `4. Research should be empirical. The researcher needs to employ appropriate methods, either quantitatively or qualitatively, to produce evidence-based information. They can be drawn from concrete experimentation, direct or indirect observation, and verifiable experience.`,
                        `5. Research should be clear. The researcher needs to use comprehensible language to present information and convey explanation throughout the research process. They should be explained well from the introductory part of the research paper to ensure a deeper understanding of the study to be conducted.`
                    ),
                    PROMPT('Examine the following research scenarios and identify what characteristic of research is disregarded. Then, suggest how can the researcher improve his/her work.',
                        OL(
                            'The researcher lacks explanation on the identified variables being studied. Characteristic disregarded: Suggestion:',
                            'The researcher does not follow the standard format in writing the research paper. Characteristic disregarded: Suggestion:',
                            'The researcher relies on the opinion of other researchers. Characteristic disregarded: Suggestion:',
                            'The researcher thinks of an implausible problem to solve. Characteristic disregarded: Suggestion:',
                            'The researcher uses information from a fabricated experimentation. Characteristic disregarded: Suggestion:'
                        )
                    ),
                    PROMPT('Identify whether the following scenarios show different characteristics of a good research. Write ACCEPT if it does, and REJECT if it does not.',
                        OL(
                            '__________ 1. Organizing the study in a logical manner',
                            '__________ 2. Disregarding the basis on which the work is founded',
                            '__________ 3. Validating the results of the study',
                            '__________ 4. Basing on biases',
                            '__________ 5. Analyzing phenomena of importance',
                            '__________ 6. Providing fabricated information',
                            '__________ 7. Presenting opinions',
                            '__________ 8. Considering the extraordinary nature of things',
                            '__________ 9. Evaluating sources of information',
                            '__________ 10. Counterchecking different evidence'
                        )
                    )
                ]
            },
            {
                heading: 'Purposes of Research',
                blocks: [
                    OL(
                        'To learn how to work independently',
                        'To learn how to work scientifically or systematically',
                        'To have an in-depth knowledge of something',
                        'To elevate your mental abilities by letting you think in higher-order thinking strategies (HOTS) of inferring, evaluating, synthesizing, appreciating, applying, and creating.',
                        'To improve your reading and writing skills',
                        'To be familiar with the basic tools of research and the various techniques of gathering data and of presenting research findings.',
                        'To free yourself, to a certain extent, from the domination or strong influence of a single textbook or the professor’s lone viewpoint or spoon feeding'
                    ),
                    PROMPT('Individual Activity — Answer the following questions:',
                        OL(
                            'Was there an instance in your life when you did an inquiry or research? Share and describe your experiences. What are your challenges and difficulties?',
                            'As a learner in senior high school, how important is research in your daily life?',
                            'In three (3) sentences, explain the role of research in understanding the situation of those who are affected by the COVID 19 pandemic.'
                        )
                    )
                ]
            },
            {
                heading: 'Types of Research',
                blocks: [
                    H('1. Based on Application of Research Method'),
                    UL(
                        `Pure Research – deals with concepts, principles, or abstract things, this type of research aims to increase your knowledge about something.`,
                        `Applied Research – Application of chosen research to societal problems or issues, finding ways to make positive changes in society.`
                    ),
                    H('2. Based on Purpose of the Research'),
                    UL(
                        `Descriptive Research – This type of research aims at defining or giving a verbal portrayal or picture of a person, thing, event, group, situation, etc. This is liable To repeated research because its topic relates itself only to a certain period or a limited number of years.`,
                        `Correlational Research – it shows relationships or connectedness of two factors, circumstances, or agents called variables that affect the research.`,
                        `Explanatory Research – this types of research elaborates or explains not just the reasons behind the relationship of two factors, but also the ways by which such relationship exists.`,
                        `Exploratory Research – the purpose of this research is to find out how reasonable or possible it is to conduct a research study on a certain topic. Here, you will discover ideas on topics that could trigger your interest in conducting research studies.`,
                        `Action Research – this type of research studies an ongoing practice of a school, organization, community, or institution for the purpose of obtaining results that will bring improvements in the system.`
                    ),
                    H('3. Based on Types of Data Needed'),
                    UL(
                        `Qualitative Research – requires non-numerical data, which means that the research uses words rather than numbers to express the results, the inquiry, or investigation about people's thoughts, beliefs, feelings, views, and lifestyles regarding the object of the study.`,
                        `Quantitative Research – involves measurement of data. Thus, it presents research findings referring to the number or frequency of something in numerical forms. (using percentages, fractions, numbers)`,
                        `*Primary Data – new and original information resulting from your sensory experience.`,
                        `*Secondary Data – data have already been written about or reported on and are available for reading purposes, they exist as secondary data.`
                    )
                ]
            },
            {
                heading: 'Approaches to Research',
                blocks: [
                    UL(
                        `Scientific or Positive Approach – in which you discover and measure information as well as observe and control variables in an impersonal manner. Data given by these techniques are expressed through numbers.`,
                        `Naturalistic Approach – this kind of approach uses words rather than numbers to express data. It directs you to deal with qualitative data that speak of how people behave toward their surroundings.`,
                        `Triangulation approach – in this case, you are free to gather and analyze data using multiple methods, allowing you to combine or mix up research approaches, research types, data gathering, and data analysis techniques.`
                    )
                ]
            }
        ]
    },

    {
        id: 'processes-and-ethics-of-research',
        number: '04',
        title: 'The Processes and Ethics of Research',
        category: 'research',
        excerpt: 'The Characteristics of Research · The Research Process · Ethics of Research · Ethical Codes and Policies for Research',
        sections: [
            {
                heading: 'The Characteristics of Research',
                blocks: [
                    P(`Characteristics of research — features or qualities.`),
                    PROMPT('Arrange the following jumbled letters to form the different characteristics of research.',
                        OL(
                            '1. ESMTSACTYI',
                            '2. EOCVJTEBI',
                            '3. C E P A I R L IM',
                            '4. L A C C L I Y C',
                            '5. L Y I T N A A L A C',
                            '6. T I L A C R I C',
                            '7. Y T I L I B A C I L R E P'
                        ),
                        TAGS('1.SYSTEMATIC', '2. OBJECTIVE', '3. EMPIRICAL', '4. CYCLICAL', '5. ANALYTICAL', '6. CRITICAL', '7. REPLICABILITY')
                    ),
                    UL(
                        `Research should be systematic. (follows orderly and sequential procedure)`,
                        `Research should be objective. (Facts and Truths)`,
                        `Research should be empirical. (direct observation and experience)`,
                        `Research should be cyclical. (starts with a problem and ends with another problem)`,
                        `Research should be critical. (Exhibits careful and precise judgment)`,
                        `Research should be analytical. (analytical procedures in gathering data)`,
                        `Research should be replicability. (research design and procedures are repeated)`
                    )
                ]
            },
            {
                heading: 'The Research Process',
                blocks: [
                    OL(
                        'Define the research problem.',
                        'Review the literature.',
                        'Formulate hypothesis.',
                        'Prepare the research design.',
                        'Collect data.',
                        'Analyze data.',
                        'Interpret and report the findings.'
                    ),
                    PROMPT('Arrange the following steps to illustrate the research process. Use one to seven (1-7) to indicate the correct chronological order.',
                        UL(
                            '1. Prepare the research design',
                            '2. Interpret and report the findings',
                            '3. Define the research problem',
                            '4. Analyze data',
                            '5. Review the literature',
                            '6. Collect data',
                            '7. Formulate hypothesis'
                        )
                    )
                ]
            },
            {
                heading: 'Ethics of Research',
                blocks: [
                    PROMPT('Search for the terms in the word puzzle below by using the given clues. Write the ten words you have found on your notebook.',
                        UL(
                            'Adhering to the facts',
                            'Being free from biases',
                            'Exhibiting morality',
                            'Showing concern',
                            'Accepting differences',
                            'Expressing high regard',
                            'Keeping privacy',
                            'Taking accountability',
                            'Having adequate capabilities',
                            'Observing lawfulness'
                        )
                    )
                ]
            },
            {
                heading: 'Ethical Codes and Policies for Research',
                blocks: [
                    P(`Cristobal (2017), the following ethical codes and policies that the researcher needs to consider in conducting a study:`),
                    OL(
                        `1. Honesty — The researcher should strive to truthfully report data in whatever form of communication all throughout the study.`,
                        `2. Objectivity — The researcher should avoid being biased. The study should not be influenced by his/her personal motives, beliefs and opinions.`,
                        `3. Integrity — The researcher should establish credibility through the consistency of his/her thought and action. He/she should act with sincerity especially on keeping agreements.`,
                        `4. Care — The researcher should never neglect even the smallest detail of the study. All information should be critically examined. Records of research activities should be properly and securely kept.`,
                        `5. Openness — The researcher should be willing to accept criticisms and new ideas for the betterment of the study.`,
                        `6. Respect for intellectual property — The researcher should not plagiarize. Credit should be given to who or where it is due. All authors cited and sources used in the study should be properly acknowledged.`,
                        `7. Confidentiality — The researcher should take steps to protect all confidential communications or documents from being discovered by others.`,
                        `8. Responsible publication — The researcher should ensure that his/her work is clear, honest, complete, accurate, and balanced, thus avoiding wasteful and duplicate publication. It should likewise refrain from selective, misleading, or ambiguous reporting.`,
                        `9. Responsible mentoring — The researcher should teach responsible conduct of research and share professional knowledge and skills especially to new or less-experienced researchers.`,
                        `10. Respect for colleagues — The researcher should show courtesy to his/her colleagues by treating them equally and fairly.`,
                        `11. Social responsibility — The researcher should promote social good by working for the best interests and benefits of the environment and society as a whole.`,
                        `12. Non-discrimination — The researcher should not discriminate based on sex, race, ethnicity, or any factor relating to scientific competence and integrity. Thus, research should be open to all people or entities who will participate in research.`,
                        `13. Competence — The researcher should possess necessary knowledge and skills in conducting a study. He/she should be equipped with a sense of professionalism and expertise to ensure competent results.`,
                        `14. Legality — The researcher should know and abide by relevant laws, institutional and government policies concerning the legal conduct of research.`,
                        `15. Human Subject Protection — The researcher should protect human lives by preventing and minimizing harms and risks. He/she should always uphold the human dignity, privacy, and autonomy of human subjects to be used in the study.`
                    )
                ]
            },
            {
                heading: 'Unethical Practices',
                blocks: [
                    P(`Suggest appropriate ethical actions that must be undertaken in order to correct the unethical practices presented below. Consider the ethical principles that must be followed in conducting a research.`),
                    TABLE(['Unethical Practices', 'Ethical Actions'], [
                        ['1. Bella, a graduating student, claimed the research work of her classmate. She erased the name of the original researcher and placed her own.', ''],
                        ['2. Joseph, the class president, forced his classmates to participate in his study.', ''],
                        ['3. A group of research students secretly chose their adviser as the subject of their research.', ''],
                        ['4. Sheila, an honor student, ranked last in the honor roll because of non-participation in extra-curricular activities. A qualitative research about her is conducted without informing her.', ''],
                        ['5. Delbert, a senior high school student, is planning to carry out his first research on the misbehavior of fellow students during examinations. However, he has no idea on the ethical guidelines in conducting such research.', '']
                    ])
                ]
            }
        ]
    },

    {
        id: 'multimedia-and-anecdotes',
        number: '05',
        title: 'Multimedia Formats and Anecdotes',
        category: 'multimedia',
        excerpt: 'Applying Multimedia and ICT in Producing Creative Representation of Literary Text · Hook · Memoir · Anecdotes · Types of Hook',
        sections: [
            {
                heading: 'Applying Multimedia and ICT in Producing Creative Representation of Literary Text',
                blocks: [
                    H('Multimedia'),
                    P(`The use of various artistic communicative media or combining multiple media formats.`),
                    H('What is ICT?'),
                    P(`Information and Communication Technology — All the technology used to handle telecommunications, broadcast media, intelligent building management systems, AV processing and transmission, etc.`),
                    H('ICT Skills?'),
                    P(`About understanding and applying a range of computer programs, software, and other applications. Include word processing, spreadsheets, databases, power points, and search engines.`),
                    H('Importance of Using Multimedia'),
                    UL(
                        'Can provide opportunities for learners like you to construct and reconstruct your ideas in audio and visual formats.',
                        'Can apply a wide range of strategies to understand, interpret and evaluate texts.'
                    )
                ]
            },
            {
                heading: 'Different Multimedia Formats',
                blocks: [
                    TAGS('Blog or Weblog', 'Mind Mapping', 'Mobile Phone Text Tula', 'Slideshow Presentation', 'Tag Cloud', 'Video'),
                    PROMPT('PT #3 – Multimedia Formats',
                        P(`The class will be divided into six groups. Each group will be assigned one multimedia format for interpreting literary texts, and their goal is to create it, explain it in front of the class, and submit it on their teacher’s email or messenger account.`)
                    )
                ]
            },
            {
                heading: '1. HOOK',
                blocks: [
                    P(`A hook is a literary device or technique used at the beginning of a piece of writing to grab the reader's attention and entice them to keep reading.`)
                ]
            },
            {
                heading: '2. Memoir',
                blocks: [
                    P(`A memoir is a historical account or biography written from personal knowledge or special sources. It typically focuses on specific events or periods in the author’s life, providing insight into their experiences, thoughts, and emotions.`)
                ]
            },
            {
                heading: '3. Anecdotes',
                blocks: [
                    P(`It is a Short entertaining or interesting story about a real incident or person. It talks about the variety of tales since they can be about any topic under the sun.`),
                    PROMPT('Activity #5 - Anecdote',
                        P(`The class will create an anecdote about their stay at MRMNHS. The anecdote will be posted on their social media account publicly with the hashtag #MyMRMNHSAnecdote`),
                        TAGS('#STEMMAGNO26_27', '#EffectiveCommunication')
                    )
                ]
            },
            {
                heading: 'Types of Hook',
                blocks: [
                    UL(
                        `Descriptive Hook: A vivid description that paints a picture and draws readers into the scene.`,
                        `Humor Hook: A light-hearted or funny statement that can create a friendly tone and make readers smile.`,
                        `Anecdotal Hook: A brief story or personal experience that relates to the main topic.`,
                        `Question Hook: A thought-provoking question that encourages readers to think and engage with the topic.`,
                        `Quote Hook: A powerful or intriguing quote that relates to the theme of your writing.`,
                        `Statistic or Fact Hook: A surprising or interesting statistic or fact that grabs attention and sets the stage for your topic.`,
                        `Bold Statement Hook: A strong, controversial, or unexpected statement that piques curiosity.`
                    )
                ]
            }
        ]
    },

    {
        id: 'intercultural-communication',
        number: '06',
        title: 'Intercultural Communication',
        category: 'intercultural',
        excerpt: 'Study of I.C. · Why do we Study I.C? · Culture · Characteristics Of Culture · Tips To Avoid Cultural missteps · Culture Shock',
        sections: [
            {
                heading: 'Study of I.C.',
                blocks: [
                    P(`The study of intercultural communication is about the study of communication that involves cultural group membership differences.`)
                ]
            },
            {
                heading: 'Why do we Study I.C?',
                blocks: [
                    H('01 Self Awareness'),
                    P(`increases our awareness of our own culture, our cultural identity and cultural background.`),
                    H('02 Demographic Change'),
                    P(`constant demographic shifts countries and communities experience.`),
                    H('03 Workplace & Economic Globalization'),
                    P(`to effectively compete in a global market, (we) must understand how business and cultural practices are conducted in other countries`),
                    H('04 Creative Problem Solving'),
                    P(`according to creativity research, we learn more from people who are different than us than from those who are similar to us.`),
                    H('05 Global and Intrapersonal peace'),
                    P(`respect is fundamental to peace, global and intrapersonal.`)
                ]
            },
            {
                heading: 'Culture',
                blocks: [
                    P(`Culture can be viewed as a iceberg.`),
                    P(`The total way of life of people, composed of their learned and shared behavior patterns, values, beliefs, norms and material objects.`),
                    P(`Culture can be Divided into:`),
                    UL(
                        `Material Objects — consists of tangible material`,
                        `Non-Material Objects — consists of intangible materials`
                    )
                ]
            },
            {
                heading: 'Characteristics Of Culture',
                blocks: [
                    UL(
                        `A. CULTURE IS LEARNED — INTERACTION, OBSERVATION, IMITATION`,
                        `B. CULTURE IS TRANSMITTED FROM GENERATION TO GENERATION — NUMEROUS CARRIERS: FAMILY, PEERS, MEDIA, CHURCH,`,
                        `C. CULTURE IS BASED ON SYMBOLS — SPOKEN WORDS, WRITTEN WORDS, NON-VERBAL ACTIONS`,
                        `D. CULTURE IS DYNAMIC — CULTURES CHANGE AND EVOLVE OVER TIME.`,
                        `E. CULTURE IS AN INTEGRATED SYSTEM — CULTURE IS COMPOSED OF PARTS THAT ARE RELATED TO EACH OTHER.`
                    )
                ]
            },
            {
                heading: 'Tips To Avoid Cultural missteps',
                blocks: [
                    H('Dont…'),
                    UL(
                        'VIEW YOUR CULTURE AS SUPERIOR TO THAT OF OTHERS',
                        'USE THE STANDARDS OF YOUR CULTURE TO EVALUATE THE ADVANTAGES AND DISADVANTAGES OF OTHER CULTURES',
                        'MAKE OVERGENERALIZATIONS ABOUT COUNTRIES AND THEIR CULTURES'
                    )
                ]
            },
            {
                heading: 'Communication as: Role Of Words',
                blocks: [
                    P(`IN DIFFERENT CULTURES WORDS PLAY DIFFERENT ROLES`),
                    H('Body Language & Gift Giving'),
                    P(`IT IS AN IMPORTANT PART OF THE COMMUNICATION PROCESS, PARTICULARLY WHERE LANGUAGE BARRIERS EXIST. CHALLENGE IS TO KNOW THE GIFT-GIVING CUSTOMS.`),
                    H('Gender & Written'),
                    P(`THE CULTURALLY APPROPRIATE MANNER IN WHICH MEN AND WOMEN RELATE WITH EACH OTHER DIFFERS AROUND THE WORLD.`),
                    P(`WRITTEN COMMUNICATION IN TWO OR MORE LANGUAGES PRESENTS SPECIAL CHALLENGES: + USE OF SLANG / IDIOMS + INEFFECTIVE TRANSLATIONS + INTERPRETATION OF WRITTEN CONTRACTS`),
                    H('Humor and Time'),
                    P(`TO APPRECIATE HUMOR, LISTENERS NEED AN UNDERSTANDING OF THE CULTURE FROM WHICH A JOKE ORIGINATES.`),
                    P(`TIME AND ITS USE ARE SEEN DIFFERENTLY AROUND THE WORLD.`),
                    H('History & Business Card Etiquette'),
                    P(`HISTORY OFTEN INFLUENCES A CULTURE'S PERCEPTIONS.`),
                    P(`BUSINESS CARD HANDLING IS A RITUAL IN SOME COUNTRIES.`),
                    H('Culture Shock'),
                    P(`IS THE DIFFICULTY PEOPLE ENCOUNTER ADJUSTING TO CULTURES THAT DIFFER MARKEDLY FROM THEIR OWN.`)
                ]
            }
        ]
    },

    {
        id: 'responsible-online-publication',
        number: '07',
        title: 'Responsible Online Publication',
        category: 'digital',
        excerpt: 'Digital Communication · Responsible online participation · Recognizing bias in online content · Respecting diverse perspectives of identities',
        sections: [
            {
                heading: 'Digital Communication',
                blocks: [
                    P(`The exchange of information, data, or messages using digital signals, electronic devices, and networks.`)
                ]
            },
            {
                heading: 'Responsible online participation',
                blocks: [
                    P(`Using digital tools and spaces safely, ethically, and respectfully to protect yourself and build a positive community.`)
                ]
            },
            {
                heading: 'Recognizing bias in online content',
                blocks: [
                    P(`Spotting when an article, post, or video favors one point of view over another instead of presenting facts fairly.`)
                ]
            },
            {
                heading: 'Respecting diverse perspectives of identities',
                blocks: [
                    P(`Actively valuing the unique backgrounds, experiences, and worldviews that shape every person.`)
                ]
            },
            {
                heading: 'Guide questions',
                blocks: [
                    PROMPT('What is the message of each comment?',
                        OL(
                            'Which comments are respectful?',
                            'Which Comments may create conflict?',
                            'Is there evidence of bias? Explain.',
                            'Why is responsible participation important online?'
                        )
                    ),
                    TAGS('Digital Communication', 'Responsible online Participation', 'Recognizing Bias in Online Content', 'Respecting Diverse Perspectives or Identities.')
                ]
            }
        ]
    }
];

const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'writing', label: 'Reading and Writing Skills' },
    { id: 'research', label: 'Research' },
    { id: 'multimedia', label: 'Multimedia' },
    { id: 'intercultural', label: 'Intercultural' },
    { id: 'digital', label: 'Digital Communication' }
];

const contributors = [
    'Aaliyah Quejada',
    'Beatrice Federicos',
    'Victor Policarpio',
    'Jenica Garcia',
    'Charlie Pacheco'
];
