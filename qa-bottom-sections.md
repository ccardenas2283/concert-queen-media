# QA — Bottom Half of Homepage

## Observations
The bottom half of the page (after the Founder section) has a significant issue:
1. The Trusted By section text is very small and barely visible — even with the contrast fix
2. There is massive empty space between the Trusted By section and the Email Signup section
3. The Email Signup section appears as a thin dark strip at the very bottom
4. The footer is compressed at the very bottom

The issue seems to be that the Venue Guide section (with the background image) is taking up too much vertical space, pushing everything else down. Or there's an issue with the sections not rendering their content properly.

Looking at the screenshot more carefully:
- The top portion shows the Founder section (with the image and bio)
- Below that is a large cream/white area with what appears to be the Trusted By section but the text is tiny
- Then a massive empty space
- Then the newsletter section appears as a small dark block
- Then the footer

## Root Cause
The Trusted By and Newsletter sections seem to be rendering correctly in terms of HTML, but the text/content is very small relative to the viewport. The sections have proper padding (py-14 and py-16) but the content within them appears miniaturized.

This could be a CSS issue with the container or the font sizes not being applied correctly.
