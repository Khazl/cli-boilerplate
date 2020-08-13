# ssg
This repository contains a static site generator. Or at least its beginnings :-)

## Installation
Simply install this repository globally with the following command:
```
npm install -g @khazl/ssg
```

## Requirements / Project Structure
You need two directories:
- `./content`: Here you'll keep all your content.
- `./templates`: Here you'll keep your template(s) and the styling.

An example for the structure could looks like this:
```
.
└── content
|   └── index.md            // <- https://example.com/index.html
|   └── about-me.md         // <- https://example.com/about-me.html
|   └── blog
|       └── first-post.md   // <- https://example.com/blog/first-post.html
└── templates
    └── _default.hbs        // <- default template
    └── about-me.hbs        // <- specific template for about-me.md
    └── default.scss        // <- https://example.com/default.css
      
```

### Content
Each Markdown file in the `content` directory represents one site.

### Templates
The `templates` directory MUST contain a `_default.hbs` file as well as a `default.scss` file.  

If some content sites should use a special template, this can easily be created.  
For this you just have to create a hbs file with the same name as the content file.

### Example
For an example, please check the linked Git repository

## Usage
Navigate into your project directory and generate the static sites with:
```
ssg-generate
```
Now you should see a `build` directory. There you will find all your generated sites.

## Planned Features
- Automated navigation generation.
- Parameter to make the CLI tool more flexible.
- Advanced template placeholder for more sophisticated layouts.
- Better asset management / support.
- ...
