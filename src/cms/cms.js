import CMS from "netlify-cms";
import * as ColorWidget from "netlify-cms-widget-color";
CMS.registerWidget("color", ColorWidget.Control);

import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
