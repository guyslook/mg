import CMS from "netlify-cms";
import * as ColorWidget from "netlify-cms-widget-color";
CMS.registerWidget("color", ColorWidget.Control);

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import CaseStudyPreview from "./preview-templates/CaseStudyPreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("casestudy", CaseStudyPreview);
