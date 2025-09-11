# OrgVision Dashboard Design Guidelines

## Design Approach
**System-Based Approach**: Using Material Design principles with heavy customization for a futuristic professional aesthetic, drawing inspiration from modern enterprise dashboards like Linear and Notion.

## Core Design Principles
- **Futuristic Minimalism**: Clean lines, subtle gradients, and strategic use of glassmorphism
- **Professional Authority**: Conveys enterprise-grade reliability and sophistication
- **Information Hierarchy**: Clear visual separation between different data types and importance levels

## Color Palette

### Dark Mode Primary (Default)
- **Background**: 220 25% 8% (Deep navy-black)
- **Surface**: 220 20% 12% (Elevated dark surface)
- **Surface Elevated**: 220 18% 16% (Cards, modals)
- **Primary Brand**: 210 100% 60% (Electric blue)
- **Primary Muted**: 210 80% 45% (Subdued blue)
- **Accent**: 270 85% 65% (Purple highlight - used sparingly)
- **Success**: 120 60% 55% (Muted green)
- **Warning**: 35 85% 60% (Amber)
- **Danger**: 355 75% 60% (Red)
- **Text Primary**: 220 15% 95% (Near white)
- **Text Secondary**: 220 10% 70% (Muted gray)
- **Text Tertiary**: 220 8% 50% (Subtle gray)

### Light Mode (Secondary)
- **Background**: 220 20% 98% (Cool white)
- **Surface**: 220 15% 95% (Clean surface)
- **Primary Brand**: 210 100% 50% (Professional blue)
- **Text Primary**: 220 20% 15% (Dark charcoal)

## Typography
- **Primary**: Inter (Google Fonts) - Clean, technical sans-serif
- **Secondary**: JetBrains Mono (Google Fonts) - For data, codes, and technical information
- **Scale**: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl

## Layout System
**Spacing Units**: Tailwind 2, 4, 6, 8, 12, 16 units
- 2 units: Tight spacing (8px)
- 4 units: Standard spacing (16px)  
- 6 units: Medium spacing (24px)
- 8 units: Large spacing (32px)
- 12 units: Section spacing (48px)
- 16 units: Page-level spacing (64px)

## Component Library

### Navigation
- **Sidebar**: Fixed left navigation with glassmorphism effects
- **Breadcrumbs**: Subtle with "/" separators and hover states
- **Tab Navigation**: Underline style with smooth transitions

### Data Display
- **Cards**: Rounded-xl with subtle shadows and glass effects
- **Tables**: Clean rows with hover states and sorting indicators
- **Charts**: Minimal styling with brand color accents
- **Network Graph**: Interactive nodes with connection lines
- **Kanban Board**: Card-based with drag-and-drop zones

### Forms
- **Input Fields**: Rounded borders with focus glow effects
- **Dropdowns**: Shadow-based with smooth animations
- **Buttons**: Primary (filled), Secondary (outline), Ghost variants
- **File Upload**: Drag-and-drop zones with visual feedback

### Overlays
- **Modals**: Centered with backdrop blur
- **Drawers**: Side-sliding panels for detailed information
- **Tooltips**: Dark with rounded corners and subtle shadows
- **Notifications**: Top-right positioned with auto-dismiss

## Visual Effects
- **Glassmorphism**: Subtle on elevated surfaces (backdrop-blur-sm)
- **Subtle Gradients**: Linear gradients from primary to primary-muted
- **Glow Effects**: Soft glows on focus states and primary actions
- **Micro-Interactions**: Smooth hover states and loading spinners

## Animations
**Minimal Implementation**: 
- Smooth transitions (200-300ms)
- Fade-in effects for content loading
- Subtle hover transformations
- Page transition effects between dashboard sections

## Images
**No Hero Images Required**: This is a data-focused admin dashboard
- **Icons**: Heroicons (outline style for consistency)
- **Avatars**: Generated or placeholder circular images for staff profiles
- **Logo**: Simple geometric logo in the top-left sidebar
- **Data Visualizations**: Chart.js or D3.js generated graphics with brand colors

The design emphasizes functionality while maintaining a cutting-edge aesthetic that reinforces the professional nature of organizational management tools.