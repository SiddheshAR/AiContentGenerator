export default [
    {
        name:'Blog Title Generator',
        desc:'A brilliant tool which leverages AI to generates Blog title from the given information.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/3959/3959542.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on the give niche & outline topic and give me result in rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true,
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name: 'Blog Content Generator',
        desc: 'An innovative tool powered by AI to generate engaging blog content ideas and outlines based on your input.',
        category: 'Content Creation',
        icon: 'https://cdn-icons-png.flaticon.com/128/8980/8980709.png', // Assuming the same icon for consistency
        aiPrompt: 'Generate 5 unique blog content ideas along with brief outlines for each, based on the provided niche and keywords. Format the output in a rich text editor compatible format.',
        slug: 'generate-blog-content',
        form: [
          {
            label: 'Enter your blog niche',
            field: 'input',
            name: 'niche',
            required: true,
          },
          {
            label: 'Enter relevant keywords (comma-separated)',
            field: 'input',
            name: 'keywords',
            required: true,
          }
        ],
      },
    ,
    {
        name: 'Social Media Planner',
        desc: 'An AI tool that crafts engaging social media post ideas tailored to your brand and audience.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/2065/2065203.png',
        aiPrompt: 'Generate 5 social media post ideas in bullet points based on the given brand identity & audience demographics, ready for content calendar and give me result in rich text editor format',
        slug: 'social-media-post-planner',
        form: [
            {
                label: 'Enter your brand identity keywords',
                field: 'input',
                name: 'brandIdentity',
                required: true,
            },
            {
                label: 'Enter your target audience demographics',
                field: 'textarea',
                name: 'audienceDemographics',
            }
        ]
    },
    {
        name: 'Article Ideas Generator',
        desc: 'A tool to generate article ideas and titles based on specified topics and themes.',
        category: 'Article',
        icon: 'https://cdn-icons-png.flaticon.com/128/9639/9639915.png',
        aiPrompt: 'Provide 5 article ideas and titles in a list based on the given topics & themes, formatted for an editorial calendar',
        slug: 'generate-article-ideas',
        form: [
            {
                label: 'Enter the main topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter specific themes or angles',
                field: 'textarea',
                name: 'themes',
            }
        ]
    },
    {
        name: 'YouTube Content Ideas',
        desc: 'An AI tool that generates YouTube video ideas based on the given niche and keywords.',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/15647/15647797.png',
        aiPrompt: 'Give me 5 YouTube video ideas in bullet form based on the given niche & keywords and format the result for a video planning document and give me result in rich text editor format',
        slug: 'generate-youtube-content',
        form: [
            {
                label: 'Enter your video niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter keywords or topics',
                field: 'textarea',
                name: 'keywords',
            }
        ]
    },
    {
        name: 'Hashtag Generator',
        desc: 'Automatically generates relevant hashtags for your social media posts to increase visibility.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/7438/7438771.png',
        aiPrompt: 'Generate 10 relevant hashtags based on the given content description and keywords, formatted for social media use and give me result in rich text editor format',
        slug: 'social-media-hashtag-generator',
        form: [
            {
                label: 'Enter content description',
                field: 'input',
                name: 'description',
                required: true,
            },
            {
                label: 'Enter keywords (comma separated)',
                field: 'textarea',
                name: 'keywords',
            }
        ]
    },
    {
        name: 'Email Subject Line Creator',
        desc: 'Crafts compelling email subject lines to improve open rates, using AI based on your email content.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/726/726623.png',
        aiPrompt: 'Create 5 compelling email subject lines based on the given email content and purpose, formatted for email campaigns and give me result in rich text editor format',
        slug: 'email-subject-line-creator',
        form: [
            {
                label: 'Enter email content overview',
                field: 'textarea',
                name: 'contentOverview',
                required: true,
            },
            {
                label: 'Enter email purpose',
                field: 'input',
                name: 'purpose',
            }
        ]
    },
    
{
    name: 'Social Media Ad Copy Creator',
    desc: 'Crafts engaging ad copy for social media platforms to boost your marketing campaigns.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/12263/12263130.png',
    aiPrompt: 'Create 3 variations of ad copy based on the given product description and target demographic, formatted for social media ads and give me result in rich text editor format',
    slug: 'social-media-ad-copy-creator',
    form: [
        {
            label: 'Enter product description',
            field: 'textarea',
            name: 'productDescription',
            required: true,
        },
        {
            label: 'Enter target demographic',
            field: 'input',
            name: 'demographic',
        }
    ]
},
{
    name: 'Social Media Profile Bio Generator',
    desc: 'Generates creative and professional bios for your social media profiles to capture the essence of your brand or personal identity.',
    category: 'Social Media',
    icon: 'https://cdn-icons-png.flaticon.com/128/4470/4470963.png',
    aiPrompt: 'Generate a professional bio for a social media profile based on the given personal or brand information, formatted for social media and give me result in rich text editor format',
    slug: 'social-media-profile-bio-generator',
    form: [
        {
            label: 'Enter personal or brand information',
            field: 'textarea',
            name: 'information',
            required: true,
        },
        {
            label: 'Specify social media platform',
            field: 'input',
            name: 'platform',
        }
    ]
}
]