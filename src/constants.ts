import { Framework } from './types';

export const FRAMEWORKS: Framework[] = [
  {
    id: '4ps',
    name: 'The 4 Ps of Marketing',
    description: 'A foundational model for businesses to define their marketing options: Product, Price, Place, and Promotion.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Product', name: 'Product', details: ['Features', 'Quality', 'Branding', 'Packaging', 'Services'], tips: 'What problem does your product solve?' },
      { id: 'Price', name: 'Price', details: ['List Price', 'Discounts', 'Allowances', 'Payment Period', 'Credit Terms'], tips: 'What is the perceived value to the buyer?' },
      { id: 'Place', name: 'Place', details: ['Channels', 'Coverage', 'Assortments', 'Locations', 'Inventory'], tips: 'Where do buyers look for your product?' },
      { id: 'Promotion', name: 'Promotion', details: ['Advertising', 'Personal Selling', 'Sales Promotion', 'Public Relations'], tips: 'How do customers learn about your product?' }
    ],
    interactiveHints: 'Adjusting Price often influences Promotion strategy and target Place.'
  },
  {
    id: '7ps',
    name: 'The 7 Ps of Marketing',
    description: 'An extension of the 4 Ps, adding People, Process, and Physical Evidence for service-based businesses.',
    category: 'Marketing & Sales',
    layout: 'radial',
    sections: [
      { id: 'Product', name: 'Product', details: ['Features', 'Benefits'] },
      { id: 'Price', name: 'Price', details: ['Strategy', 'Margins'] },
      { id: 'Place', name: 'Place', details: ['Distribution', 'Access'] },
      { id: 'Promotion', name: 'Promotion', details: ['Reach', 'Awareness'] },
      { id: 'People', name: 'People', details: ['Staff', 'Customer Service', 'Culture'], tips: 'The human side of your service.' },
      { id: 'Process', name: 'Process', details: ['Delivery', 'Efficiency', 'Standardization'], tips: 'How is the service delivered?' },
      { id: 'Physical Evidence', name: 'Physical Evidence', details: ['Environment', 'Receipts', 'Brochures'], tips: 'Tangible clues of the service quality.' }
    ]
  },
  {
    id: 'aida',
    name: 'AIDA Model',
    description: 'Describes the stages a consumer goes through: Awareness, Interest, Desire, and Action.',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'Awareness', name: 'Awareness', details: ['Attention', 'Discovery'], tips: 'Capture the audience\'s attention.' },
      { id: 'Interest', name: 'Interest', details: ['Engagement', 'Features'], tips: 'Highlight product benefits.' },
      { id: 'Desire', name: 'Desire', details: ['Emotional connection', 'Want'], tips: 'Create a personal bond/need.' },
      { id: 'Action', name: 'Action', details: ['Purchase', 'Sign-up'], tips: 'Clear call to action.' }
    ],
    interactiveHints: 'Drag tactics like "Social Media Ads" from Awareness to Interest as campaigns evolve.'
  },
  {
    id: 'stp',
    name: 'STP Framework',
    description: 'Strategic process: Segmentation, Targeting, and Positioning.',
    category: 'Strategy & Innovation',
    layout: 'columns',
    sections: [
      { id: 'Segmentation', name: 'Segmentation', details: ['Demographic', 'Psychographic', 'Geographic', 'Behavioral'] },
      { id: 'Targeting', name: 'Targeting', details: ['Attractiveness', 'Competitiveness', 'Selection'] },
      { id: 'Positioning', name: 'Positioning', details: ['USP', 'Brand Image', 'Value Proposition'] }
    ]
  },
  {
    id: 'sostac',
    name: 'SOSTAC® Model',
    description: 'A planning model: Situation, Objectives, Strategy, Tactics, Action, and Control.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Situation', name: 'Situation', details: ['Where are we now?', 'SWOT'] },
      { id: 'Objectives', name: 'Objectives', details: ['SMART Goals', 'KPIs'] },
      { id: 'Strategy', name: 'Strategy', details: ['How do we get there?'] },
      { id: 'Tactics', name: 'Tactics', details: ['Details of strategy'] },
      { id: 'Action', name: 'Action', details: ['Who does what?'] },
      { id: 'Control', name: 'Control', details: ['Measurement', 'Reporting'] }
    ]
  },
  {
    id: 'race',
    name: 'RACE Framework',
    description: 'Managing digital marketing lifecycle: Reach, Act, Convert, and Engage.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Reach', name: 'Reach', details: ['Build awareness', 'Drive traffic'] },
      { id: 'Act', name: 'Act', details: ['Engagement', 'Lead gen'] },
      { id: 'Convert', name: 'Convert', details: ['Sales', 'Profit'] },
      { id: 'Engage', name: 'Engage', details: ['Retention', 'Loyalty'] }
    ]
  },
  {
    id: 'golden-circle',
    name: 'The Golden Circle',
    description: 'Communicating from the inside out: Why, How, and What.',
    category: 'Marketing & Sales',
    layout: 'circles',
    sections: [
      { id: 'Why', name: 'Why', details: ['Purpose', 'Beliefs'], tips: 'Why does the organization exist?' },
      { id: 'How', name: 'How', details: ['Processes', 'Unique values'], tips: 'How do you do what you do?' },
      { id: 'What', name: 'What', details: ['Products', 'Services'], tips: 'What do you actually produce?' }
    ]
  },
  {
    id: 'brand-essence',
    name: 'Brand Essence Flower',
    description: 'Defining core identity from tangible attributes to intangible essence.',
    category: 'Marketing & Sales',
    layout: 'flower',
    sections: [
      { id: 'Attributes', name: 'Attributes', details: ['Tangible features'] },
      { id: 'Benefits', name: 'Benefits', details: ['Functional & Emotional'] },
      { id: 'Personality', name: 'Personality', details: ['Brand voice', 'Traits'] },
      { id: 'Values', name: 'Values', details: ['Core beliefs'] },
      { id: 'Essence', name: 'Essence', details: ['Single-word core'] }
    ]
  },
  {
    id: 'dagmar',
    name: 'DAGMAR Model',
    description: 'Setting measurable advertising goals: Awareness, Comprehension, Conviction, and Action.',
    category: 'Marketing & Sales',
    layout: 'staircase',
    sections: [
      { id: 'Awareness', name: 'Awareness', details: ['Know the brand'] },
      { id: 'Comprehension', name: 'Comprehension', details: ['Understand product'] },
      { id: 'Conviction', name: 'Conviction', details: ['Mental disposition'] },
      { id: 'Action', name: 'Action', details: ['Physical step'] }
    ]
  },
  {
    id: '4cs',
    name: 'The 4 Cs of Marketing',
    description: 'Customer-centric version: Customer Value, Cost, Convenience, and Communication.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Customer Value', name: 'Customer Value', details: ['Solution to problem', 'Value prop'] },
      { id: 'Cost', name: 'Cost', details: ['Price', 'Time', 'Opportunity Cost'] },
      { id: 'Convenience', name: 'Convenience', details: ['Ease of purchase', 'Availability'] },
      { id: 'Communication', name: 'Communication', details: ['Two-way dialogue', 'Engagement'] }
    ]
  },
  {
    id: 'keller-cbbe',
    name: 'Keller\'s Brand Equity (CBBE)',
    description: 'A pyramid model for building a strong brand based on progressive customer relationships.',
    category: 'Marketing & Sales',
    layout: 'pyramid',
    sections: [
      { id: 'Resonance', name: 'Resonance', details: ['Loyalty', 'Attachment', 'Community', 'Engagement'], tips: 'The pinnacle of brand-customer bonding.' },
      { id: 'Judgments', name: 'Judgments', details: ['Quality', 'Credibility', 'Consideration', 'Superiority'] },
      { id: 'Feelings', name: 'Feelings', details: ['Warmth', 'Fun', 'Excitement', 'Security', 'Social Approval'] },
      { id: 'Performance', name: 'Performance', details: ['Primary characteristics', 'Reliability', 'Durability', 'Serviceability', 'Efficiency', 'Style', 'Price'] },
      { id: 'Imagery', name: 'Imagery', details: ['User profiles', 'Purchase/Usage situations', 'Personality', 'History', 'Heritage'] },
      { id: 'Salience', name: 'Salience', details: ['Brand awareness', 'Recognition', 'Recall'], tips: 'Ensuring customers recognize and recall the brand.' }
    ]
  },
  {
    id: 'finks-lifecycle',
    name: 'Fink\'s Crisis Lifecycle',
    description: 'A model viewing crisis as a lifecycle with four distinct stages.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Prodromal', name: 'Prodromal', details: ['Warning signs', 'Prevention opportunity'], tips: 'Spotting the clues before the eruption.' },
      { id: 'Acute', name: 'Acute', details: ['Eruption', 'Point of no return', 'Public notification'], tips: 'Immediate damage control phase.' },
      { id: 'Chronic', name: 'Chronic', details: ['Recovery', 'Self-analysis', 'Clean-up', 'Investigations'] },
      { id: 'Resolution', name: 'Resolution', details: ['Closure', 'Lessons learned'] }
    ]
  },
  {
    id: 'coombs-scct',
    name: 'Coombs\' SCCT',
    description: 'Matching communication response to crisis responsibility levels.',
    category: 'Change & Communication',
    layout: 'columns',
    sections: [
      { id: 'Victim', name: 'Victim Cluster', details: ['Natural disaster', 'Rumor', 'Tampering'], tips: 'Low organizational responsibility.' },
      { id: 'Accidental', name: 'Accidental Cluster', details: ['Technical error', 'Recalls'], tips: 'Moderate attribution of blame.' },
      { id: 'Preventable', name: 'Preventable Cluster', details: ['Human error', 'Misconduct'], tips: 'Strongest reputational threat.' }
    ]
  },
  {
    id: 'renewal-theory',
    name: 'Renewal Theory',
    description: 'Shifting focus from defensive posturing to positive, forward-looking narratives.',
    category: 'Change & Communication',
    layout: 'columns',
    sections: [
      { id: 'Learning', name: 'Org Learning', details: ['Lessons learned', 'Concrete changes'], tips: 'Demonstrate growth through crisis.' },
      { id: 'Ethics', name: 'Ethical Comm', details: ['Transparency', 'Honesty', 'Value-driven'] },
      { id: 'Vision', name: 'Prospective Vision', details: ['Future state', 'Compelling narrative'] },
      { id: 'Rhetoric', name: 'Effective Rhetoric', details: ['Leadership voice', 'Mobilizing support'] }
    ]
  },
  {
    id: 'aarrr',
    name: 'Pirate Metrics (AARRR)',
    description: 'Five-stage startup growth funnel: Acquisition, Activation, Retention, Referral, Revenue.',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'Acquisition', name: 'Acquisition', details: ['Where are users coming from?'] },
      { id: 'Activation', name: 'Activation', details: ['First good experience?'] },
      { id: 'Retention', name: 'Retention', details: ['Do they come back?'] },
      { id: 'Referral', name: 'Referral', details: ['Do they tell others?'] },
      { id: 'Revenue', name: 'Revenue', details: ['How do you make money?'] }
    ]
  },
  {
    id: 'bant',
    name: 'BANT Sales Qualification',
    description: 'A classic sales process to qualify leads based on Budget, Authority, Need, and Timeline.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Budget', name: 'Budget', details: ['Does the prospect have the funds?'], tips: 'Confirm availability of budget early.' },
      { id: 'Authority', name: 'Authority', details: ['Who is the decision maker?'], tips: 'Identify the person with the power to say yes.' },
      { id: 'Need', name: 'Need', details: ['Is there a business problem to solve?'], tips: 'Focus on the specific pain points.' },
      { id: 'Timeline', name: 'Timeline', details: ['How soon do they need a solution?'], tips: 'Understanding the urgency of the deal.' }
    ]
  },
  {
    id: 'content-matrix',
    name: 'Content Marketing Matrix',
    description: 'A grid to plan content types based on awareness vs purchase and emotional vs rational axes.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Entertain', name: 'Entertain (Emotional/Awareness)', details: ['Viral content', 'Games', 'Videos'] },
      { id: 'Inspire', name: 'Inspire (Emotional/Purchase)', details: ['Community forums', 'Reviews', 'Celebrity endorsements'] },
      { id: 'Educate', name: 'Educate (Rational/Awareness)', details: ['Infographics', 'White papers', 'Guides'] },
      { id: 'Convince', name: 'Convince (Rational/Purchase)', details: ['Case studies', 'Product demos', 'Pricing guides'] }
    ]
  },
  {
    id: 'swot',
    name: 'SWOT Analysis',
    description: 'A strategic planning tool to identify Strengths, Weaknesses, Opportunities, and Threats.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Strengths', name: 'Strengths (Internal)', details: ['Capabilities', 'Resources', 'Advantages'], tips: 'What do you do better than anyone else?' },
      { id: 'Weaknesses', name: 'Weaknesses (Internal)', details: ['Gaps', 'Resource limitations', 'Disadvantages'], tips: 'What could you improve?' },
      { id: 'Opportunities', name: 'Opportunities (External)', details: ['Market trends', 'Tech changes', 'Policy shifts'], tips: 'What interesting trends are you aware of?' },
      { id: 'Threats', name: 'Threats (External)', details: ['Competitors', 'Market obstacles', 'Economic downturns'], tips: 'What obstacles do you face?' }
    ]
  },
  {
    id: 'pestle',
    name: 'PESTLE Analysis',
    description: 'Scanning the external macro-environment across six key factors.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Political', name: 'Political', details: ['Government policy', 'Stability', 'Trade rules'] },
      { id: 'Economic', name: 'Economic', details: ['Growth', 'Interest rates', 'Inflation'] },
      { id: 'Social', name: 'Social', details: ['Demographics', 'Lifestyles', 'Values'] },
      { id: 'Technological', name: 'Technological', details: ['Innovation', 'R&D', 'Automation'] },
      { id: 'Legal', name: 'Legal', details: ['Employment law', 'Health & Safety', 'Regulations'] },
      { id: 'Environmental', name: 'Environmental', details: ['Climate', 'Sustainability', 'Green labels'] }
    ]
  },
  {
    id: 'porter-five',
    name: 'Porter\'s Five Forces',
    description: 'Analyzing the competitive intensity and attractiveness of an industry.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'NewEntrants', name: 'Threat of New Entrants', details: ['Barriers to entry', 'Economies of scale'] },
      { id: 'Buyers', name: 'Bargaining Power of Buyers', details: ['Number of customers', 'Price sensitivity'] },
      { id: 'Suppliers', name: 'Bargaining Power of Suppliers', details: ['Switching costs', 'Supplier concentration'] },
      { id: 'Substitutes', name: 'Threat of Substitutes', details: ['Price/Performance trade-off'] },
      { id: 'Rivalry', name: 'Competitive Rivalry', details: ['Number of competitors', 'Industry growth'], tips: 'The central force of competition.' }
    ]
  },
  {
    id: 'balanced-scorecard',
    name: 'Balanced Scorecard',
    description: 'Strategic performance management tool viewed from four perspectives.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Financial', name: 'Financial', details: ['ROI', 'Profit Margins', 'Revenue Growth'] },
      { id: 'Customer', name: 'Customer', details: ['Market Share', 'Satisfaction', 'Retention'] },
      { id: 'Internal', name: 'Internal Processes', details: ['Cycle time', 'Quality', 'Unit cost'] },
      { id: 'Learning', name: 'Learning & Growth', details: ['Employee skills', 'Culture', 'Systems'] }
    ]
  },
  {
    id: 'mckinsey-7s',
    name: 'McKinsey 7-S',
    description: 'Aligning seven internal elements for organizational success.',
    category: 'Operations & Supply Chain',
    layout: 'radial',
    sections: [
      { id: 'Strategy', name: 'Strategy', details: ['Plan to build competitive advantage'] },
      { id: 'Structure', name: 'Structure', details: ['Hierarchy', 'Coordination'] },
      { id: 'Systems', name: 'Systems', details: ['Daily activities', 'Procedures'] },
      { id: 'SharedValues', name: 'Shared Values', details: ['Core beliefs', 'Culture'], tips: 'The central "Hard S".' },
      { id: 'Skills', name: 'Skills', details: ['Core competencies'] },
      { id: 'Style', name: 'Style', details: ['Leadership approach'] },
      { id: 'Staff', name: 'Staff', details: ['Employees', 'Capabilities'] }
    ]
  },
  {
    id: 'bmc',
    name: 'Business Model Canvas',
    description: 'Strategic management template for documenting business models.',
    category: 'Strategy & Innovation',
    layout: 'bmc',
    sections: [
      { id: 'Partnerships', name: 'Key Partnerships', details: ['Suppliers', 'Strategic alliances'] },
      { id: 'Activities', name: 'Key Activities', details: ['Production', 'Problem solving', 'Platform'] },
      { id: 'Resources', name: 'Key Resources', details: ['Physical', 'Intellectual', 'Human', 'Financial'] },
      { id: 'ValueProp', name: 'Value Propositions', details: ['Products & Services', 'Pains/Gains addressed'] },
      { id: 'Relationships', name: 'Customer Relationships', details: ['Personal assistance', 'Automated', 'Self-service'] },
      { id: 'Channels', name: 'Channels', details: ['Marketing', 'Sales', 'Service'] },
      { id: 'Segments', name: 'Customer Segments', details: ['Mass market', 'Niche', 'Segmented'] },
      { id: 'CostStructure', name: 'Cost Structure', details: ['Fixed costs', 'Variable costs'] },
      { id: 'RevenueStreams', name: 'Revenue Streams', details: ['Asset sale', 'Usage fee', 'Subscription'] }
    ]
  },
  {
    id: 'wardley',
    name: 'Wardley Mapping',
    description: 'Visualizing value chain and evolution stage for situational awareness.',
    category: 'Strategy & Innovation',
    layout: 'map',
    sections: [
      { id: 'User', name: 'User Need', details: ['Anchor at the top'] },
      { id: 'ValueChain', name: 'Value Chain', details: ['Components required'] },
      { id: 'Evolution', name: 'Evolution Stages', details: ['Genesis to Commodity'] }
    ]
  },
  {
    id: 'six-sigma',
    name: 'Six Sigma (DMAIC)',
    description: 'Five-step methodology for process improvement.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'Define', name: 'Define', details: ['Problem statement', 'Goal'] },
      { id: 'Measure', name: 'Measure', details: ['Data collection', 'Process mapping'] },
      { id: 'Analyze', name: 'Analyze', details: ['Root cause', 'Data analysis'] },
      { id: 'Improve', name: 'Improve', details: ['Solutions', 'Pilot'] },
      { id: 'Control', name: 'Control', details: ['Sustaining gains', 'Monitoring'] }
    ]
  },
  {
    id: 'kaizen-pdca',
    name: 'Kaizen (PDCA)',
    description: 'Continuous improvement cycle focusing on small, ongoing changes.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Objectives', 'Process'] },
      { id: 'Do', name: 'Do', details: ['Implementation', 'Execution'] },
      { id: 'Check', name: 'Check', details: ['Measurement', 'Trial results'] },
      { id: 'Act', name: 'Act', details: ['Standardization', 'Adjustments'] }
    ]
  },
  {
    id: 'blue-ocean-canvas',
    name: 'Blue Ocean Strategy',
    description: 'Central diagnostic tool for creating uncontested market space.',
    category: 'Strategy & Innovation',
    layout: 'graph',
    sections: [
      { id: 'Eliminate', name: 'Eliminate', details: ['Factors industry takes for granted'] },
      { id: 'Reduce', name: 'Reduce', details: ['Factors well below industry standard'] },
      { id: 'Raise', name: 'Raise', details: ['Factors well above industry standard'] },
      { id: 'Create', name: 'Create', details: ['Factors industry never offered'] }
    ]
  },
  {
    id: 'hoshin-kanri',
    name: 'Hoshin Kanri (X-Matrix)',
    description: 'Connecting long-term vision with short-term actions and metrics.',
    category: 'Operations & Supply Chain',
    layout: 'x-matrix',
    sections: [
      { id: 'Breakthrough', name: 'Breakthrough Objectives', details: ['3-5 year strategic goals'] },
      { id: 'Annual', name: 'Annual Objectives', details: ['Current year specific goals'] },
      { id: 'Priorities', name: 'Top-Level Priorities', details: ['Key initiatives and projects'] },
      { id: 'Metrics', name: 'Metrics & Targets', details: ['KPIs and owners'] }
    ]
  },
  {
    id: 'mintzberg-5ps',
    name: 'Mintzberg\'s 5 Ps',
    description: 'Five perspectives to evaluate an existing strategy.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Intended course of action'] },
      { id: 'Ploy', name: 'Ploy', details: ['Maneuver to outwit competitors'] },
      { id: 'Pattern', name: 'Pattern', details: ['Consistency in behavior over time'] },
      { id: 'Position', name: 'Position', details: ['Niche in the marketplace'] },
      { id: 'Perspective', name: 'Perspective', details: ['Ingrained way of perceiving the world'] }
    ]
  },
  {
    id: 'value-disciplines',
    name: 'Value Disciplines',
    description: 'Excel in one discipline while maintaining competitive standards in others.',
    category: 'Strategy & Innovation',
    layout: 'columns',
    sections: [
      { id: 'OpExcel', name: 'Operational Excellence', details: ['Reliability', 'Competitive price', 'Best total cost'] },
      { id: 'CustomerIntimacy', name: 'Customer Intimacy', details: ['Tailored solutions', 'Deep relationships'] },
      { id: 'ProdLeadership', name: 'Product Leadership', details: ['Continuous innovation', 'Fast time-to-market'] }
    ]
  },
  {
    id: '5whys',
    name: 'The 5 Whys',
    description: 'Root cause analysis technique by repeatedly asking "Why?".',
    category: 'Problem Solving & Decision Making',
    layout: 'linear',
    sections: [
      { id: 'Problem', name: 'Problem Statement', details: ['The initial symptom'] },
      { id: 'Why1', name: 'Why? (Level 1)', details: ['First layer of cause'] },
      { id: 'Why2', name: 'Why? (Level 2)', details: ['Second layer of cause'] },
      { id: 'Why3', name: 'Why? (Level 3)', details: ['Third layer of cause'] },
      { id: 'Why4', name: 'Why? (Level 4)', details: ['Fourth layer of cause'] },
      { id: 'Why5', name: 'Why? (Root Cause)', details: ['The underlying issue'] }
    ]
  },
  {
    id: 'fishbone',
    name: 'Fishbone Diagram',
    description: 'Categorizing potential causes of a problem to identify root causes.',
    category: 'Problem Solving & Decision Making',
    layout: 'fishbone',
    sections: [
      { id: 'Manpower', name: 'Manpower', details: ['People', 'Skills', 'Training'] },
      { id: 'Methods', name: 'Methods', details: ['Processes', 'Rules', 'Regulations'] },
      { id: 'Machines', name: 'Machines', details: ['Tools', 'Equipment', 'Software'] },
      { id: 'Materials', name: 'Materials', details: ['Raw materials', 'Information', 'Parts'] },
      { id: 'Measurements', name: 'Measurements', details: ['Data', 'Standards'] },
      { id: 'Environment', name: 'Environment', details: ['Workplace', 'Culture', 'Market'] }
    ]
  },
  {
    id: 'issue-tree',
    name: 'Issue Tree',
    description: 'Breaking down complex problems into MECE components.',
    category: 'Problem Solving & Decision Making',
    layout: 'tree',
    sections: [
      { id: 'Core', name: 'Core Problem', details: ['Primary issue'] },
      { id: 'Branch1', name: 'Branch A', details: ['Sub-component 1'] },
      { id: 'Branch2', name: 'Branch B', details: ['Sub-component 2'] },
      { id: 'Sub1', name: 'Detail A1', details: ['Granular level'] }
    ]
  },
  {
    id: 'scqa',
    name: 'SCQA Framework',
    description: 'Storytelling structure: Situation, Complication, Question, Answer.',
    category: 'Change & Communication',
    layout: 'grid',
    sections: [
      { id: 'Situation', name: 'Situation', details: ['Context and status quo'] },
      { id: 'Complication', name: 'Complication', details: ['The change or problem'] },
      { id: 'Question', name: 'Question', details: ['The key issue arising'] },
      { id: 'Answer', name: 'Answer', details: ['The solution or strategy'] }
    ]
  },
  {
    id: 'ooda-loop',
    name: 'OODA Loop',
    description: 'Decision-making cycle for fast-paced environments.',
    category: 'Problem Solving & Decision Making',
    layout: 'cycle',
    sections: [
      { id: 'Observe', name: 'Observe', details: ['Gather info'] },
      { id: 'Orient', name: 'Orient', details: ['Mental models', 'Context'] },
      { id: 'Decide', name: 'Decide', details: ['Formulate plan'] },
      { id: 'Act', name: 'Act', details: ['Execute'] }
    ]
  },
  {
    id: 'kepner-tregoe',
    name: 'Kepner-Tregoe Method',
    description: 'Structured approach to problem solving and decision making.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Situation', name: 'Situation Appraisal', details: ['Identify and prioritize concerns'] },
      { id: 'Problem', name: 'Problem Analysis', details: ['Root cause identification'] },
      { id: 'Decision', name: 'Decision Analysis', details: ['Choosing the best path'] },
      { id: 'Potential', name: 'Potential Problem Analysis', details: ['Risk mitigation'] }
    ]
  },
  {
    id: 'stacey-matrix',
    name: 'Stacey Matrix',
    description: 'Navigating organizational complexity based on certainty and agreement.',
    category: 'Strategy & Innovation',
    layout: 'graph',
    sections: [
      { id: 'Simple', name: 'Simple', details: ['Known solutions', 'Best practices'] },
      { id: 'Complicated', name: 'Complicated', details: ['Expert analysis needed'] },
      { id: 'Complex', name: 'Complex', details: ['Emergent strategy', 'Experiments'] },
      { id: 'Chaotic', name: 'Chaotic', details: ['Crisis state', 'Act decisively'] }
    ]
  },
  {
    id: 'bow-tie',
    name: 'Bow-Tie Diagram',
    description: 'Visualizing pathways from causes of an event to its consequences.',
    category: 'Finance & Risk',
    layout: 'bow-tie',
    sections: [
      { id: 'Threats', name: 'Threats', details: ['Potential causes'] },
      { id: 'BarriersPrevent', name: 'Preventative Barriers', details: ['Safety controls'] },
      { id: 'TopEvent', name: 'Critical Event', details: ['The center of the bow-tie'] },
      { id: 'BarriersMitigate', name: 'Mitigating Barriers', details: ['Impact reduction'] },
      { id: 'Consequences', name: 'Consequences', details: ['Final outcomes'] }
    ]
  },
  {
    id: 'force-field',
    name: 'Force Field Analysis',
    description: 'Analyzing Driving Forces vs Restraining Forces for change.',
    category: 'Strategy & Innovation',
    layout: 'force-field',
    sections: [
      { id: 'Driving', name: 'Driving Forces', details: ['Positive forces for change'] },
      { id: 'Restraining', name: 'Restraining Forces', details: ['Obstacles to change'] }
    ]
  },
  {
    id: 'six-hats',
    name: 'Six Thinking Hats',
    description: 'De Bono\'s role-playing technique for group discussion.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'White', name: 'White Hat (Facts)', details: ['Data and information'] },
      { id: 'Red', name: 'Red Hat (Emotions)', details: ['Feelings and intuition'] },
      { id: 'Black', name: 'Black Hat (Cautions)', details: ['Risks and problems'] },
      { id: 'Yellow', name: 'Yellow Hat (Benefits)', details: ['Value and advantages'] },
      { id: 'Green', name: 'Green Hat (Creative)', details: ['Ideas and possibilities'] },
      { id: 'Blue', name: 'Blue Hat (Process)', details: ['Control and overview'] }
    ]
  },
  {
    id: 'grow',
    name: 'GROW Model',
    description: 'Coaching and problem-solving framework.',
    category: 'Leadership & Teams',
    layout: 'linear',
    sections: [
      { id: 'Goal', name: 'Goal', details: ['What do you want?'] },
      { id: 'Reality', name: 'Reality', details: ['What is happening now?'] },
      { id: 'Options', name: 'Options', details: ['What could you do?'] },
      { id: 'Will', name: 'Will', details: ['What will you do?'] }
    ]
  },
  {
    id: 'star',
    name: 'STAR Method',
    description: 'Structuring behavioral interview answers.',
    category: 'Leadership & Teams',
    layout: 'linear',
    sections: [
      { id: 'Situation', name: 'Situation', details: ['Set the context'] },
      { id: 'Task', name: 'Task', details: ['Required challenge'] },
      { id: 'Action', name: 'Action', details: ['What you did'] },
      { id: 'Result', name: 'Result', details: ['Outcome achieved'] }
    ]
  },
  {
    id: 'rapid',
    name: 'RAPID Model',
    description: 'Decision-making role assignment.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Recommend', name: 'Recommend', details: ['Propose action'] },
      { id: 'Agree', name: 'Agree', details: ['Sign-off required'] },
      { id: 'Perform', name: 'Perform', details: ['Execution'] },
      { id: 'Input', name: 'Input', details: ['Provide data'] },
      { id: 'Decide', name: 'Decide', details: ['Final authority'] }
    ]
  },
  {
    id: 'a3-problem-solving',
    name: 'A3 Problem Solving',
    description: 'Structured approach that fits on a single A3 sheet.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Background', name: 'Background', details: ['Context of the problem'] },
      { id: 'Current', name: 'Current State', details: ['Where we are now'] },
      { id: 'Goals', name: 'Goals', details: ['Target state'] },
      { id: 'RootCause', name: 'Root Cause Analysis', details: ['Why the gap exists'] },
      { id: 'Countermeasures', name: 'Countermeasures', details: ['Proposed solutions'] },
      { id: 'FollowUp', name: 'Follow-up', details: ['Plan to verify results'] }
    ]
  },
  {
    id: 'catwoe',
    name: 'CATWOE Analysis',
    description: 'Checklist for defining a problem from multiple perspectives.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Customers', name: 'Customers', details: ['Who are the victims/beneficiaries?'] },
      { id: 'Actors', name: 'Actors', details: ['Who will do the work?'] },
      { id: 'Transformation', name: 'Transformation', details: ['Inputs to outputs'] },
      { id: 'Worldview', name: 'Worldview', details: ['Bigger picture/impact'] },
      { id: 'Owner', name: 'Owner', details: ['Who can start/stop the process?'] },
      { id: 'Environment', name: 'Environment', details: ['Constraints and rules'] }
    ]
  },
  {
    id: 'cynefin',
    name: 'Cynefin Framework',
    description: 'Sense-making framework for identifying decision context.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Clear', name: 'Clear (Simple)', details: ['Sense-Categorize-Respond', 'Best practice'] },
      { id: 'Complicated', name: 'Complicated', details: ['Sense-Analyze-Respond', 'Good practice'] },
      { id: 'Complex', name: 'Complex', details: ['Probe-Sense-Respond', 'Emergent practice'] },
      { id: 'Chaotic', name: 'Chaotic', details: ['Act-Sense-Respond', 'Novel practice'] },
      { id: 'Disorder', name: 'Disorder', details: ['Unknown domain'] }
    ]
  },
  {
    id: 'fmea',
    name: 'FMEA',
    description: 'Failure Modes and Effects Analysis.',
    category: 'Finance & Risk',
    layout: 'grid',
    sections: [
      { id: 'Modes', name: 'Failure Modes', details: ['What could go wrong?'] },
      { id: 'Effects', name: 'Potential Effects', details: ['Consequences of failure'] },
      { id: 'Causes', name: 'Potential Causes', details: ['Why it might fail'] },
      { id: 'Controls', name: 'Current Controls', details: ['Detection methods'] }
    ]
  },
  {
    id: 'design-thinking',
    name: 'Design Thinking',
    description: 'Human-centered iterative process for creative problem-solving.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Empathize', name: 'Empathize', details: ['User research', 'Interviews'] },
      { id: 'Define', name: 'Define', details: ['Problem statement', 'User needs'] },
      { id: 'Ideate', name: 'Ideate', details: ['Brainstorming', 'Solutions'] },
      { id: 'Prototype', name: 'Prototype', details: ['Mockups', 'Storyboards'] },
      { id: 'Test', name: 'Test', details: ['Feedback', 'Refinement'] }
    ]
  },
  {
    id: 'lean-startup',
    name: 'Lean Startup',
    description: 'Build-Measure-Learn feedback loop for validated learning.',
    category: 'Strategy & Innovation',
    layout: 'cycle',
    sections: [
      { id: 'Build', name: 'Build', details: ['MVP', 'Product'] },
      { id: 'Measure', name: 'Measure', details: ['Data', 'Metrics'] },
      { id: 'Learn', name: 'Learn', details: ['Pivot or Persevere'] }
    ]
  },
  {
    id: 'stage-gate',
    name: 'Stage-Gate Process',
    description: 'Managing projects through stages separated by decision points.',
    category: 'Strategy & Innovation',
    layout: 'stage-gate',
    sections: [
      { id: 'Scoping', name: 'Scoping', details: ['Market prospects'] },
      { id: 'BusinessCase', name: 'Build Business Case', details: ['Financials', 'Project plan'] },
      { id: 'Development', name: 'Development', details: ['Product design'] },
      { id: 'Testing', name: 'Testing & Validation', details: ['Field trials'] },
      { id: 'Launch', name: 'Launch', details: ['Full commercialization'] }
    ]
  },
  {
    id: 'kotter-change',
    name: 'Kotter\'s 8-Step Model',
    description: 'Leading successful organizational change.',
    category: 'Change & Communication',
    layout: 'staircase',
    sections: [
      { id: 'Urgency', name: 'Create Urgency', details: ['Market reality'] },
      { id: 'Coalition', name: 'Form Coalition', details: ['Powerful group'] },
      { id: 'Vision', name: 'Create Vision', details: ['Strategy for change'] },
      { id: 'Communicate', name: 'Communicate Vision', details: ['Engage stakeholders'] },
      { id: 'Empower', name: 'Remove Obstacles', details: ['Empower action'] },
      { id: 'Wins', name: 'Short-Term Wins', details: ['Visible successes'] },
      { id: 'Build', name: 'Build on Change', details: ['Consolidate gains'] },
      { id: 'Anchor', name: 'Anchor in Culture', details: ['Standardize'] }
    ]
  },
  {
    id: 'adkar',
    name: 'ADKAR Model',
    description: 'Individual and organizational change goals.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Awareness', name: 'Awareness', details: ['Of need for change'] },
      { id: 'Desire', name: 'Desire', details: ['To participate'] },
      { id: 'Knowledge', name: 'Knowledge', details: ['How to change'] },
      { id: 'Ability', name: 'Ability', details: ['To implement skills'] },
      { id: 'Reinforcement', name: 'Reinforcement', details: ['To sustain change'] }
    ]
  },
  {
    id: 'leavitt-diamond',
    name: 'Leavitt\'s Diamond',
    description: 'Interdependence of Tasks, People, Structure, and Technology.',
    category: 'Change & Communication',
    layout: 'diamond',
    sections: [
      { id: 'Tasks', name: 'Tasks', details: ['Work processes'] },
      { id: 'People', name: 'People', details: ['Skills', 'Roles'] },
      { id: 'Structure', name: 'Structure', details: ['Hierarchy', 'Teams'] },
      { id: 'Technology', name: 'Technology', details: ['Systems', 'Tools'] }
    ]
  },
  {
    id: 'double-diamond',
    name: 'Double Diamond',
    description: 'Problem and solution space exploration.',
    category: 'Strategy & Innovation',
    layout: 'double-diamond',
    sections: [
      { id: 'Discover', name: 'Discover', details: ['Insight into problem'] },
      { id: 'Define', name: 'Define', details: ['Area to focus on'] },
      { id: 'Develop', name: 'Develop', details: ['Potential solutions'] },
      { id: 'Deliver', name: 'Deliver', details: ['Final solution'] }
    ]
  },
  {
    id: 'hofstede',
    name: 'Hofstede\'s Dimensions',
    description: 'Framework for understanding national cultures.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'PDI', name: 'Power Distance', details: ['Acceptance of hierarchy'] },
      { id: 'IDV', name: 'Individualism', details: ['Personal vs group achievement'] },
      { id: 'MAS', name: 'Masculinity', details: ['Assertiveness vs cooperation'] },
      { id: 'UAI', name: 'Uncertainty Avoidance', details: ['Tolerance for ambiguity'] },
      { id: 'LTO', name: 'Long-Term Orientation', details: ['Future vs present rewards'] },
      { id: 'IVR', name: 'Indulgence', details: ['Gratification vs restraint'] }
    ]
  },
  {
    id: 'doblin-10',
    name: 'Doblin\'s 10 Types of Innovation',
    description: 'Categorizes innovation into configuration, offering, and experience.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'ProfitModel', name: 'Profit Model', details: ['How you make money'] },
      { id: 'Network', name: 'Network', details: ['Connections with others'] },
      { id: 'Structure', name: 'Structure', details: ['Alignment of assets'] },
      { id: 'Process', name: 'Process', details: ['Superior methods'] },
      { id: 'Performance', name: 'Product Performance', details: ['Distinguishing features'] },
      { id: 'System', name: 'Product System', details: ['Complementary products'] },
      { id: 'Service', name: 'Service', details: ['Support and enhancements'] },
      { id: 'Channel', name: 'Channel', details: ['How offerings are delivered'] },
      { id: 'Brand', name: 'Brand', details: ['Representation of offerings'] },
      { id: 'Engagement', name: 'Customer Engagement', details: ['Distinctive interactions'] }
    ]
  },
  {
    id: 'innovation-ambition',
    name: 'Innovation Ambition Matrix',
    description: '2x2 matrix for market vs capability strategy.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Core', name: 'Core', details: ['Existing products/markets'] },
      { id: 'Adjacent', name: 'Adjacent', details: ['New products or markets'] },
      { id: 'Transformational', name: 'Transformational', details: ['New products and markets'] }
    ]
  },
  {
    id: 'hype-cycle',
    name: 'Gartner Hype Cycle',
    description: 'Graphical representation of maturity and adoption of technologies.',
    category: 'Strategy & Innovation',
    layout: 'hype-cycle',
    sections: [
      { id: 'Trigger', name: 'Innovation Trigger', details: ['Potential breakthrough'] },
      { id: 'Peak', name: 'Peak of Inflated Expectations', details: ['Frenzy of publicity'] },
      { id: 'Trough', name: 'Trough of Disillusionment', details: ['Interest wanes'] },
      { id: 'Slope', name: 'Slope of Enlightenment', details: ['Concrete examples of benefits'] },
      { id: 'Plateau', name: 'Plateau of Productivity', details: ['Mainstream adoption'] }
    ]
  },
  {
    id: 'three-horizons',
    name: 'Three Horizons of Growth',
    description: 'Framework for managing current performance and future growth.',
    category: 'Strategy & Innovation',
    layout: 'graph',
    sections: [
      { id: 'H1', name: 'Horizon 1: Core', details: ['Maintain core business'] },
      { id: 'H2', name: 'Horizon 2: Emerging', details: ['Build emerging businesses'] },
      { id: 'H3', name: 'Horizon 3: Future', details: ['Create viable future options'] }
    ]
  },
  {
    id: 'jtbd-canvas',
    name: 'JTBD Canvas',
    description: 'Mapping the job a customer is trying to accomplish.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Job', name: 'The Job', details: ['Primary task'] },
      { id: 'Outcomes', name: 'Desired Outcomes', details: ['Success metrics'] },
      { id: 'Constraints', name: 'Constraints', details: ['Obstacles'] },
      { id: 'Tasks', name: 'Related Tasks', details: ['Supporting actions'] }
    ]
  },
  {
    id: 'scamper',
    name: 'SCAMPER',
    description: 'Creative thinking technique using seven verbs to spur ideas.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'S', name: 'Substitute', details: ['Replace part of the problem'] },
      { id: 'C', name: 'Combine', details: ['Merge components'] },
      { id: 'A', name: 'Adapt', details: ['Adjust to new context'] },
      { id: 'M', name: 'Modify', details: ['Magnify or minify'] },
      { id: 'P', name: 'Put to Use', details: ['Alternative applications'] },
      { id: 'E', name: 'Eliminate', details: ['Simplify or remove'] },
      { id: 'R', name: 'Reverse', details: ['Rearrange or invert'] }
    ]
  },
  {
    id: 'lewin-change',
    name: 'Lewin\'s Change Model',
    description: 'Simple three-step process for managing change.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Unfreeze', name: 'Unfreeze', details: ['Prepare for change'] },
      { id: 'Change', name: 'Change', details: ['Implement movement'] },
      { id: 'Refreeze', name: 'Refreeze', details: ['Stabilize new state'] }
    ]
  },
  {
    id: 'trl',
    name: 'Technology Readiness Level',
    description: 'Assessing technology maturity from conception to deployment.',
    category: 'Strategy & Innovation',
    layout: 'staircase',
    sections: [
      { id: 'TRL1-3', name: 'Research', details: ['Basic principles', 'Proof of concept'] },
      { id: 'TRL4-6', name: 'Development', details: ['Lab validation', 'Prototype'] },
      { id: 'TRL7-9', name: 'Deployment', details: ['System demo', 'Operational'] }
    ]
  },
  {
    id: 'change-curve',
    name: 'Change Curve',
    description: 'Tracking morale and performance through organizational change.',
    category: 'Change & Communication',
    layout: 'graph',
    sections: [
      { id: 'Shock', name: 'Shock & Denial', details: ['Initial reaction'] },
      { id: 'Anger', name: 'Anger & Frustration', details: ['Resistance'] },
      { id: 'Depression', name: 'Depression', details: ['Lowest morale point'] },
      { id: 'Experiment', name: 'Experiment', details: ['Engagement begins'] },
      { id: 'Decision', name: 'Decision', details: ['Learning to work in new way'] },
      { id: 'Integration', name: 'Integration', details: ['Change is accepted'] }
    ]
  },
  {
    id: 'nabc',
    name: 'NABC Method',
    description: 'Developing powerful value propositions.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Need', name: 'Need', details: ['Market requirement'] },
      { id: 'Approach', name: 'Approach', details: ['Unique solution'] },
      { id: 'Benefit', name: 'Benefit', details: ['Value per cost'] },
      { id: 'Competition', name: 'Competition', details: ['Alternatives'] }
    ]
  },
  {
    id: 'design-sprint',
    name: 'Design Sprint',
    description: 'Five-day process for answering critical business questions.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Monday', name: 'Understand', details: ['Map out problem'] },
      { id: 'Tuesday', name: 'Sketch', details: ['Generate solutions'] },
      { id: 'Wednesday', name: 'Decide', details: ['Select best idea'] },
      { id: 'Thursday', name: 'Prototype', details: ['Build realistic facade'] },
      { id: 'Friday', name: 'Test', details: ['Get user feedback'] }
    ]
  },
  {
    id: 'innovation-funnel',
    name: 'Innovation Funnel',
    description: 'Filtering ideas from concept to commercialization.',
    category: 'Strategy & Innovation',
    layout: 'funnel',
    sections: [
      { id: 'Ideation', name: 'Ideation', details: ['Raw concepts'] },
      { id: 'Feasibility', name: 'Feasibility', details: ['Screening'] },
      { id: 'Development', name: 'Development', details: ['Execution'] },
      { id: 'Launch', name: 'Launch', details: ['Market entry'] }
    ]
  },
  {
    id: 's-curve',
    name: 'S-Curve of Innovation',
    description: 'Tracking technology performance over time.',
    category: 'Strategy & Innovation',
    layout: 's-curve',
    sections: [
      { id: 'Emerging', name: 'Emerging', details: ['Slow start'] },
      { id: 'Growth', name: 'Growth', details: ['Rapid progress'] },
      { id: 'Maturity', name: 'Maturity', details: ['Plateau'] }
    ]
  },
  {
    id: 'three-box',
    name: 'Three-Box Solution',
    description: 'Balancing the present, past, and future.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Present', name: 'Manage the Present', details: ['Core business efficiency'] },
      { id: 'Past', name: 'Forget the Past', details: ['Divest obsolete assets'] },
      { id: 'Future', name: 'Create the Future', details: ['Breakthrough innovation'] }
    ]
  },
  {
    id: 'rogers-adoption',
    name: 'Diffusion of Innovations',
    description: 'Bell curve showing adoption rates over time.',
    category: 'Strategy & Innovation',
    layout: 'bell-curve',
    sections: [
      { id: 'Innovators', name: 'Innovators', details: ['Risk takers'] },
      { id: 'EarlyAdopters', name: 'Early Adopters', details: ['Opinion leaders'] },
      { id: 'EarlyMajority', name: 'Early Majority', details: ['Pragmatists'] },
      { id: 'LateMajority', name: 'Late Majority', details: ['Skeptics'] },
      { id: 'Laggards', name: 'Laggards', details: ['Traditionalists'] }
    ]
  },
  {
    id: 'satir-model',
    name: 'Satir Change Model',
    description: 'Emotional journey through the change process.',
    category: 'Change & Communication',
    layout: 'satir',
    sections: [
      { id: 'StatusQuo', name: 'Old Status Quo', details: ['Late status quo'] },
      { id: 'Resistance', name: 'Resistance', details: ['Foreign element'] },
      { id: 'Chaos', name: 'Chaos', details: ['Lowest performance'] },
      { id: 'Integration', name: 'Integration', details: ['Practice and proficiency'] },
      { id: 'NewStatusQuo', name: 'New Status Quo', details: ['Stability'] }
    ]
  },
  {
    id: 'burke-litwin',
    name: 'Burke-Litwin Model',
    description: 'Causal diagram of organizational variables.',
    category: 'Change & Communication',
    layout: 'grid',
    sections: [
      { id: 'Strategy', name: 'Mission & Strategy', details: ['Organization purpose'] },
      { id: 'Leadership', name: 'Leadership', details: ['Executive behavior'] },
      { id: 'Culture', name: 'Culture', details: ['Values and norms'] },
      { id: 'Structure', name: 'Structure', details: ['Reporting lines'] },
      { id: 'Systems', name: 'Systems', details: ['Policies and procedures'] }
    ]
  },
  {
    id: 'waterfall',
    name: 'Waterfall Model',
    description: 'Traditional, linear project management methodology.',
    category: 'Operations & Supply Chain',
    layout: 'staircase',
    sections: [
      { id: 'Requirements', name: 'Requirements', details: ['Documentation', 'Stakeholder sign-off'] },
      { id: 'Design', name: 'Design', details: ['Architecture', 'Technical specs'] },
      { id: 'Implementation', name: 'Implementation', details: ['Coding', 'Unit testing'] },
      { id: 'Verification', name: 'Verification', details: ['System testing', 'QA'] },
      { id: 'Maintenance', name: 'Maintenance', details: ['Support', 'Updates'] }
    ]
  },
  {
    id: 'scrum',
    name: 'Agile & Scrum',
    description: 'Iterative approach focusing on sprints and feedback loops.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'ProductBacklog', name: 'Product Backlog', details: ['Master list of features'] },
      { id: 'SprintBacklog', name: 'Sprint Backlog', details: ['Selected for the sprint'] },
      { id: 'Sprint', name: 'Sprint Cycle', details: ['2-4 weeks of execution'] },
      { id: 'Increment', name: 'Increment', details: ['Potentially shippable product'] }
    ]
  },
  {
    id: 'kanban',
    name: 'Kanban Board',
    description: 'Visual method for managing workflow and limiting WIP.',
    category: 'Operations & Supply Chain',
    layout: 'kanban',
    sections: [
      { id: 'Backlog', name: 'Backlog', details: ['Upcoming tasks'] },
      { id: 'InProgress', name: 'In Progress (WIP)', details: ['Currently being worked on'] },
      { id: 'Review', name: 'In Review', details: ['Validation / QA'] },
      { id: 'Done', name: 'Done', details: ['Completed value'] }
    ]
  },
  {
    id: 'porter-value-chain',
    name: 'Porter\'s Value Chain',
    description: 'Activities required to create competitive advantage.',
    category: 'Operations & Supply Chain',
    layout: 'value-chain',
    sections: [
      { id: 'Inbound', name: 'Inbound Logistics', details: ['Receiving', 'Storage', 'Inv control'] },
      { id: 'Operations', name: 'Operations', details: ['Manufacturing', 'Assembly', 'Packaging'] },
      { id: 'Outbound', name: 'Outbound Logistics', details: ['Shipping', 'Warehousing', 'Distribution'] },
      { id: 'Marketing', name: 'Marketing & Sales', details: ['Pricing', 'Promotion', 'Advocacy'] },
      { id: 'Service', name: 'Service', details: ['Installation', 'Repair', 'Training'] },
      { id: 'Infrastructure', name: 'Firm Infrastructure', details: ['Finance', 'Legal', 'Quality'] },
      { id: 'HR', name: 'HR Management', details: ['Recruiting', 'Training', 'Retention'] },
      { id: 'Tech', name: 'Tech Development', details: ['R&D', 'Design', 'Process automation'] },
      { id: 'Procurement', name: 'Procurement', details: ['Vendor selection', 'Purchasing'] }
    ]
  },
  {
    id: 'scor-model',
    name: 'SCOR Model',
    description: 'Supply chain management diagnostic tool.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Demand/supply planning'] },
      { id: 'Source', name: 'Source', details: ['Inventory/purchasing'] },
      { id: 'Make', name: 'Make', details: ['Production', 'WIP'] },
      { id: 'Deliver', name: 'Deliver', details: ['Order management'] },
      { id: 'Return', name: 'Return', details: ['Defective/excess goods'] },
      { id: 'Enable', name: 'Enable', details: ['Data', 'Compliance'] }
    ]
  },
  {
    id: 'prince2',
    name: 'PRINCE2',
    description: 'Process-based project management methodology.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'SU', name: 'Starting Up', details: ['Project mandate'] },
      { id: 'DP', name: 'Directing', details: ['Project board oversight'] },
      { id: 'IP', name: 'Initiating', details: ['Project plan (PID)'] },
      { id: 'CS', name: 'Controlling', details: ['Work packages'] },
      { id: 'MP', name: 'Managing Delivery', details: ['Product creation'] },
      { id: 'SB', name: 'Stage Boundaries', details: ['End of stage check'] },
      { id: 'CP', name: 'Closing', details: ['Final evaluation'] }
    ]
  },
  {
    id: 'moscow',
    name: 'MoSCoW Prioritization',
    description: 'Reaching common understanding on requirement importance.',
    category: 'Operations & Supply Chain',
    layout: 'columns',
    sections: [
      { id: 'Must', name: 'Must Have', details: ['Non-negotiable criticals'] },
      { id: 'Should', name: 'Should Have', details: ['High priority value additions'] },
      { id: 'Could', name: 'Could Have', details: ['Nice to have if resources permit'] },
      { id: 'Wont', name: 'Won\'t Have (Now)', details: ['Explicitly out of scope'] }
    ]
  },
  {
    id: 'cpm',
    name: 'Critical Path Method',
    description: 'Identifying the sequence of activities that determines project duration.',
    category: 'Operations & Supply Chain',
    layout: 'graph',
    sections: [
      { id: 'Tasks', name: 'Activities', details: ['Durations', 'Dependencies'] },
      { id: 'Early', name: 'Early Start/Finish', details: ['Forward pass'] },
      { id: 'Late', name: 'Late Start/Finish', details: ['Backward pass'] },
      { id: 'Float', name: 'Slack/Float', details: ['Buffer time'] }
    ]
  },
  {
    id: 'wbs',
    name: 'Work Breakdown Structure',
    description: 'Hierarchical decomposition of project into deliverables.',
    category: 'Operations & Supply Chain',
    layout: 'tree',
    sections: [
      { id: 'Level1', name: 'Project Level', details: ['Main goal'] },
      { id: 'Level2', name: 'Major Deliverables', details: ['Main phases'] },
      { id: 'Level3', name: 'Work Packages', details: ['Smallest manageable units'] }
    ]
  },
  {
    id: 'dmaic',
    name: 'Lean Six Sigma (DMAIC)',
    description: 'Data-driven quality strategy for process improvement.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'Define', name: 'Define', details: ['Problem and goals'] },
      { id: 'Measure', name: 'Measure', details: ['Current performance'] },
      { id: 'Analyze', name: 'Analyze', details: ['Root cause of defects'] },
      { id: 'Improve', name: 'Improve', details: ['Implement solutions'] },
      { id: 'Control', name: 'Control', details: ['Maintain gains'] }
    ]
  },
  {
    id: 'risk-matrix',
    name: 'Risk Management Matrix',
    description: 'Prioritizing risks based on likelihood and impact.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'HighHigh', name: 'Critical (High/High)', details: ['Immediate action required'] },
      { id: 'HighLow', name: 'Monitor (High Impact/Low Prob)', details: ['Contingency planning'] },
      { id: 'LowHigh', name: 'Manage (Low Impact/High Prob)', details: ['Improve controls'] },
      { id: 'LowLow', name: 'Accept (Low/Low)', details: ['Periodic review'] }
    ]
  },
  {
    id: 'srm',
    name: 'SRM (Kraljic Matrix)',
    description: 'Segmenting suppliers for strategic management.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Strategic', name: 'Strategic Items', details: ['High profit, high risk'] },
      { id: 'Leverage', name: 'Leverage Items', details: ['High profit, low risk'] },
      { id: 'Bottleneck', name: 'Bottleneck Items', details: ['Low profit, high risk'] },
      { id: 'NonCritical', name: 'Non-Critical Items', details: ['Low profit, low risk'] }
    ]
  },
  {
    id: 'spiral-model',
    name: 'Spiral Model',
    description: 'Risk-driven process model for software engineering.',
    category: 'Operations & Supply Chain',
    layout: 'spiral',
    sections: [
      { id: 'Objectives', name: 'Identify Objectives', details: ['Requirements', 'Constraints'] },
      { id: 'Risks', name: 'Resolve Risks', details: ['Prototyping', 'Evaluation'] },
      { id: 'Develop', name: 'Development', details: ['Build and test'] },
      { id: 'Plan', name: 'Plan Next Phase', details: ['Review and commitment'] }
    ]
  },
  {
    id: 'evm',
    name: 'Earned Value Management',
    description: 'Measuring project performance and progress.',
    category: 'Operations & Supply Chain',
    layout: 'graph',
    sections: [
      { id: 'PV', name: 'Planned Value', details: ['Budgeted cost of work'] },
      { id: 'EV', name: 'Earned Value', details: ['Actual work performed'] },
      { id: 'AC', name: 'Actual Cost', details: ['Cost incurred'] }
    ]
  },
  {
    id: 'logistics-map',
    name: 'Logistics Network Design',
    description: 'Mapping the flow from suppliers to customers.',
    category: 'Operations & Supply Chain',
    layout: 'map',
    sections: [
      { id: 'Suppliers', name: 'Suppliers', details: ['Raw material sources'] },
      { id: 'Plants', name: 'Manufacturing Plants', details: ['Production hubs'] },
      { id: 'Warehouses', name: 'Distribution Centers', details: ['Storage and sorting'] },
      { id: 'Customers', name: 'Customer Clusters', details: ['Final demand points'] }
    ]
  },
  {
    id: 'make-buy',
    name: 'Make-Buy Matrix',
    description: 'Evaluating in-house production vs outsourcing.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Strategic', name: 'Strategic (Make)', details: ['Core competence', 'High control'] },
      { id: 'Critical', name: 'Critical (Partner)', details: ['Specialized skills', 'Collaboration'] },
      { id: 'Commodity', name: 'Commodity (Buy)', details: ['Standard parts', 'Price focus'] },
      { id: 'LowValue', name: 'Low Value (Outsource)', details: ['Non-core', 'Efficiency focus'] }
    ]
  },
  {
    id: 'xp-practices',
    name: 'Extreme Programming (XP)',
    description: 'Core practices for high-quality software development.',
    category: 'Operations & Supply Chain',
    layout: 'flower',
    sections: [
      { id: 'Pair', name: 'Pair Programming', details: ['Two devs, one machine'] },
      { id: 'TDD', name: 'Test-Driven Development', details: ['Tests before code'] },
      { id: 'CI', name: 'Continuous Integration', details: ['Frequent merges'] },
      { id: 'Refactor', name: 'Refactoring', details: ['Clean code'] },
      { id: 'Simple', name: 'Simple Design', details: ['Avoid over-engineering'] },
      { id: 'Planning', name: 'Planning Game', details: ['Frequent small releases'] }
    ]
  },
  {
    id: 'tco-analysis',
    name: 'Total Cost of Ownership',
    description: 'Analyzing all direct and indirect costs over a lifecycle.',
    category: 'Operations & Supply Chain',
    layout: 'columns',
    sections: [
      { id: 'Acquisition', name: 'Acquisition Costs', details: ['Purchase price', 'Shipping'] },
      { id: 'Operate', name: 'Operating Costs', details: ['Power', 'Labor', 'Training'] },
      { id: 'Maintain', name: 'Maintenance Costs', details: ['Repairs', 'Spare parts'] },
      { id: 'Disposal', name: 'End-of-Life', details: ['Resale', 'Recycling', 'Scrap'] }
    ]
  },
  {
    id: 'dupont',
    name: 'DuPont Analysis',
    description: 'Decomposing ROE into profitability, efficiency, and leverage.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'ROE', name: 'Return on Equity', details: ['Net Income / Equity'] },
      { id: 'Profitability', name: 'Profitability', details: ['Net Profit Margin (NI/Sales)'] },
      { id: 'Efficiency', name: 'Asset Efficiency', details: ['Asset Turnover (Sales/Assets)'] },
      { id: 'Leverage', name: 'Financial Leverage', details: ['Equity Multiplier (Assets/Equity)'] }
    ]
  },
  {
    id: 'eva',
    name: 'Economic Value Added (EVA)',
    description: 'Measuring true profit by deducting cost of capital.',
    category: 'Finance & Risk',
    layout: 'columns',
    sections: [
      { id: 'NOPAT', name: 'NOPAT', details: ['Net Operating Profit After Tax'] },
      { id: 'Capital', name: 'Capital Invested', details: ['Total Assets - Non-interest liabilities'] },
      { id: 'WACC', name: 'WACC', details: ['Weighted Average Cost of Capital'] }
    ]
  },
  {
    id: 'capital-allocation',
    name: 'Capital Allocation',
    description: 'Framework for deploying financial capital to maximize value.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'Available', name: 'Available Capital', details: ['Operating cash flow', 'Asset sales'] },
      { id: 'Organic', name: 'Organic Growth', details: ['R&D', 'CapEx'] },
      { id: 'Inorganic', name: 'M&A', details: ['Strategic acquisitions'] },
      { id: 'Return', name: 'Return to Sh.', details: ['Dividends', 'Buybacks'] }
    ]
  },
  {
    id: 'altman-z',
    name: 'Altman Z-Score',
    description: 'Predicting the probability that a firm will go into bankruptcy.',
    category: 'Finance & Risk',
    layout: 'gauge',
    sections: [
      { id: 'Safe', name: 'Safe Zone (Z > 2.99)', details: ['Strong financial position'] },
      { id: 'Grey', name: 'Grey Zone (1.81 < Z < 2.99)', details: ['Cautious monitoring'] },
      { id: 'Distress', name: 'Distress Zone (Z < 1.81)', details: ['High bankruptcy risk'] }
    ]
  },
  {
    id: 'financial-scorecard',
    name: 'Financial Scorecard',
    description: 'Holistic view of company health across key ratios.',
    category: 'Finance & Risk',
    layout: 'grid',
    sections: [
      { id: 'Liquidity', name: 'Liquidity', details: ['Current Ratio', 'Quick Ratio'] },
      { id: 'Profitability', name: 'Profitability', details: ['Gross Margin', 'EBITDA Margin'] },
      { id: 'Leverage', name: 'Solvency', details: ['Debt-to-Equity', 'Interest Coverage'] },
      { id: 'Efficiency', name: 'Operating Efficiency', details: ['Inventory Turnover', 'DSO'] }
    ]
  },
  {
    id: 'sva',
    name: 'Shareholder Value Analysis',
    description: 'Decomposing value drivers that contribute to shareholder wealth.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'SValue', name: 'Shareholder Value', details: ['Total return to shareholders'] },
      { id: 'Drivers', name: 'Value Drivers', details: ['Sales growth', 'Operating margin', 'Tax rate'] },
      { id: 'Investments', name: 'Investments', details: ['Working capital', 'Fixed assets'] },
      { id: 'Cost', name: 'Cost of Capital', details: ['WACC baseline'] }
    ]
  },
  {
    id: 'cba',
    name: 'Cost-Benefit Analysis',
    description: 'Evaluating projects by comparing total costs vs total benefits.',
    category: 'Finance & Risk',
    layout: 't-chart',
    sections: [
      { id: 'Costs', name: 'Projected Costs', details: ['Initial outlay', 'Maintenance', 'Opportunity costs'] },
      { id: 'Benefits', name: 'Projected Benefits', details: ['Revenue increase', 'Cost savings', 'Intangibles'] }
    ]
  },
  {
    id: 'working-capital-cycle',
    name: 'Working Capital Cycle',
    description: 'Tracking the flow of cash through inventory and receivables.',
    category: 'Finance & Risk',
    layout: 'cycle',
    sections: [
      { id: 'Cash', name: 'Cash', details: ['Initial capital'] },
      { id: 'Inventory', name: 'Inventory', details: ['Raw materials & finished goods'] },
      { id: 'Receivables', name: 'Receivables', details: ['Credit sales to customers'] },
      { id: 'Payables', name: 'Payables', details: ['Settling with suppliers'] }
    ]
  },
  {
    id: 'capm',
    name: 'CAPM (Conceptual)',
    description: 'Relationship between expected return and systematic risk (beta).',
    category: 'Finance & Risk',
    layout: 'graph',
    sections: [
      { id: 'RiskFree', name: 'Risk-Free Rate', details: ['Government bonds baseline'] },
      { id: 'Beta', name: 'Beta (Systematic Risk)', details: ['Market sensitivity'] },
      { id: 'Premium', name: 'Market Risk Premium', details: ['Required return above risk-free'] }
    ]
  },
  {
    id: 'dividend-policy',
    name: 'Dividend Policy Framework',
    description: 'Factors influencing the decision to pay or retain earnings.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'Decision', name: 'Dividend Decision', details: ['Payout vs Retention'] },
      { id: 'Finance', name: 'Financial Position', details: ['Profits', 'Liquidity'] },
      { id: 'Growth', name: 'Growth Opps', details: ['Reinvestment needs'] },
      { id: 'Expectations', name: 'Sh. Expectations', details: ['Signaling', 'Tax effects'] }
    ]
  },
  {
    id: 'financial-analysis-flow',
    name: 'Financial Analysis Framework',
    description: 'Structured process for interpreting financial data.',
    category: 'Finance & Risk',
    layout: 'linear',
    sections: [
      { id: 'Objective', name: 'State Objective', details: ['Define scope and purpose'] },
      { id: 'Data', name: 'Gather Data', details: ['Statements', 'Market info'] },
      { id: 'Process', name: 'Process Data', details: ['Ratios', 'Adjustments'] },
      { id: 'Analyze', name: 'Analyze & Interpret', details: ['Trends', 'Comparisons'] },
      { id: 'Report', name: 'Report Conclusions', details: ['Insights', 'Recommendations'] }
    ]
  },
  {
    id: 'merger-analysis',
    name: 'M&A Accretion / Dilution',
    description: 'Comparing pro-forma EPS to standalone EPS post-merger.',
    category: 'Finance & Risk',
    layout: 'comparison',
    sections: [
      { id: 'Standalone', name: 'Acquirer Standalone', details: ['Current EPS', 'Current Earnings'] },
      { id: 'Adjustments', name: 'Synergies & Interest', details: ['Cost savings', 'New debt cost'] },
      { id: 'ProForma', name: 'Combined Pro-Forma', details: ['Projected EPS', 'Ownership dilution'] }
    ]
  },
  {
    id: 'payback-period',
    name: 'Payback Visualization',
    description: 'Tracking cumulative cash flow to recover initial investment.',
    category: 'Finance & Risk',
    layout: 'graph',
    sections: [
      { id: 'Initial', name: 'Initial Investment', details: ['Year 0 Outflow'] },
      { id: 'Inflows', name: 'Annual Inflows', details: ['Year 1-5 generation'] },
      { id: 'Payback', name: 'Payback Point', details: ['Cumulative break-even'] }
    ]
  },
  {
    id: 'vpec-t',
    name: 'VPEC-T',
    description: 'Analyzing complex systems and their alignment.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Values', name: 'Values', details: ['Ethical/cultural norms'] },
      { id: 'Policies', name: 'Policies', details: ['Rules and constraints'] },
      { id: 'Events', name: 'Events', details: ['Critical triggers and data'] },
      { id: 'Content', name: 'Content', details: ['Information and assets'] },
      { id: 'Trust', name: 'Trust', details: ['Relationship dependencies'] }
    ]
  },
  {
    id: 'cmm',
    name: 'Capability Maturity Model',
    description: 'Assessing process maturity across five levels.',
    category: 'Operations & Supply Chain',
    layout: 'staircase',
    sections: [
      { id: 'L1', name: 'Initial', details: ['Ad-hoc, chaotic'] },
      { id: 'L2', name: 'Repeatable', details: ['Basic project management'] },
      { id: 'L3', name: 'Defined', details: ['Process standardization'] },
      { id: 'L4', name: 'Managed', details: ['Quantitative management'] },
      { id: 'L5', name: 'Optimizing', details: ['Continuous improvement'] }
    ]
  },
  {
    id: 'service-profit-chain',
    name: 'Service-Profit Chain',
    description: 'Linking employee satisfaction to profitability.',
    category: 'Strategy & Innovation',
    layout: 'linear',
    sections: [
      { id: 'Internal', name: 'Internal Quality', details: ['Employee satisfaction'] },
      { id: 'Value', name: 'External Value', details: ['Service quality/Value'] },
      { id: 'Satisfaction', name: 'Customer Satisf.', details: ['Loyalty'] },
      { id: 'Profit', name: 'Growth & Profit', details: ['Revenue increase'] }
    ]
  },
  {
    id: 'hoq',
    name: 'House of Quality (QFD)',
    description: 'Translating customer requirements into engineering specs.',
    category: 'Operations & Supply Chain',
    layout: 'hoq',
    sections: [
      { id: 'Customer', name: 'Whats (Customer Needs)', details: ['Primary requirements'] },
      { id: 'Technical', name: 'Hows (Technical)', details: ['Measurable specs'] },
      { id: 'Relationship', name: 'Relationship Matrix', details: ['Co-relation grid'] },
      { id: 'Roof', name: 'The Roof', details: ['Technical trade-offs'] }
    ]
  },
  {
    id: 'harts-ladder',
    name: 'Hart\'s Ladder',
    description: 'Levels of citizen/user involvement in projects.',
    category: 'Problem Solving & Decision Making',
    layout: 'ladder',
    sections: [
      { id: 'Initiated', name: 'User-Led Decisions', details: ['Top of the ladder'] },
      { id: 'Consulted', name: 'Consulted & Informed', details: ['Middle ground'] },
      { id: 'Assigned', name: 'Assigned & Informed', details: ['Tokenism level'] },
      { id: 'Manipulation', name: 'Manipulation', details: ['Bottom rungs'] }
    ]
  },
  {
    id: 'iceberg-model',
    name: 'Iceberg Model',
    description: 'Understanding deeper causes of events and systems.',
    category: 'Problem Solving & Decision Making',
    layout: 'iceberg',
    sections: [
      { id: 'Events', name: 'Events', details: ['Visible outcomes'] },
      { id: 'Patterns', name: 'Patterns & Trends', details: ['History of events'] },
      { id: 'Structures', name: 'Systemic Structures', details: ['Policies, power'] },
      { id: 'Mental', name: 'Mental Models', details: ['Beliefs, assumptions'] }
    ]
  },
  {
    id: 'eisenhower-matrix',
    name: 'Eisenhower Matrix',
    description: 'Prioritizing tasks based on urgency and importance.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Do', name: 'Do (Urgent/Important)', details: ['Immediate action'] },
      { id: 'Decide', name: 'Decide (Important/Not Urgent)', details: ['Schedule time'] },
      { id: 'Delegate', name: 'Delegate (Urgent/Not Important)', details: ['Who can do this?'] },
      { id: 'Delete', name: 'Delete (Neither)', details: ['Eliminate waste'] }
    ]
  },
  {
    id: 'swot-tows',
    name: 'SWOT-TOWS Matrix',
    description: 'Strategic options derived from SWOT factors.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'SO', name: 'SO Strategies', details: ['Strengths to leverage Opps'] },
      { id: 'WO', name: 'WO Strategies', details: ['Overcome Weakness using Opps'] },
      { id: 'ST', name: 'ST Strategies', details: ['Use Strength to avoid Threats'] },
      { id: 'WT', name: 'WT Strategies', details: ['Minimizing W and T'] }
    ]
  },
  {
    id: 'efqm',
    name: 'EFQM Excellence Model',
    description: 'Framework for organizational excellence and self-assessment.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Purpose', name: 'Purpose, Strategy & Culture', details: ['The "Why"'] },
      { id: 'Leadership', name: 'Leadership & Stakeholders', details: ['Engagement'] },
      { id: 'Value', name: 'Creating Sustainable Value', details: ['Operations'] },
      { id: 'Performance', name: 'Performance & Transformation', details: ['Results'] }
    ]
  },
  {
    id: 'real-options',
    name: 'Real Options Analysis',
    description: 'Investment choices as strategic options.',
    category: 'Finance & Risk',
    layout: 'tree',
    sections: [
      { id: 'Option', name: 'Wait to Invest', details: ['Flexibility value'] },
      { id: 'Expand', name: 'Option to Expand', details: ['Staged investment'] },
      { id: 'Abandon', name: 'Option to Abandon', details: ['Stop loss'] },
      { id: 'Switch', name: 'Option to Switch', details: ['Product/Process pivot'] }
    ]
  },
  {
    id: 'rbv',
    name: 'Resource-Based View (RBV)',
    description: 'Internal resources as the source of competitive advantage.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Value', name: 'Valuable', details: ['Neutralize threats/exploits opps'] },
      { id: 'Rare', name: 'Rare', details: ['Difficult for competitors to find'] },
      { id: 'Inimitable', name: 'Inimitable', details: ['Costly to imitate'] },
      { id: 'Organized', name: 'Organized', details: ['Ability to capture value'] }
    ]
  },
  {
    id: 'gemba-walk',
    name: 'Gemba Walk',
    description: 'Observation of the actual place where work happens.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Prepare', name: 'Theme & Purpose', details: ['What are we looking for?'] },
      { id: 'Observe', name: 'Go and See', details: ['Direct observation'] },
      { id: 'Ask', name: 'Ask Why', details: ['Understand the process'] },
      { id: 'Respect', name: 'Show Respect', details: ['Collaborate with workers'] }
    ]
  },
  {
    id: 'nominal-group',
    name: 'Nominal Group Technique',
    description: 'Structured brainstorming for group decision-making.',
    category: 'Problem Solving & Decision Making',
    layout: 'linear',
    sections: [
      { id: 'Silent', name: 'Silent Generation', details: ['Write down ideas'] },
      { id: 'Round', name: 'Round Robin', details: ['Share ideas without debate'] },
      { id: 'Clarify', name: 'Clarification', details: ['Discuss and group'] },
      { id: 'Vote', name: 'Voting', details: ['Rank and prioritize'] }
    ]
  },
  {
    id: 'paired-comparison',
    name: 'Paired Comparison Analysis',
    description: 'Comparing options against each other to find the best choice.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'OptionA', name: 'A vs B', details: ['Weighting preference'] },
      { id: 'OptionB', name: 'A vs C', details: ['Score comparison'] },
      { id: 'OptionC', name: 'B vs C', details: ['Final ranking'] }
    ]
  },
  {
    id: 'pre-mortem',
    name: 'Pre-mortem Analysis',
    description: 'Identifying potential failure points before they happen.',
    category: 'Problem Solving & Decision Making',
    layout: 'linear',
    sections: [
      { id: 'Imagine', name: 'Imagine Failure', details: ['Total disaster scenario'] },
      { id: 'Reasons', name: 'Generate Reasons', details: ['Why did it happen?'] },
      { id: 'Solutions', name: 'Identify Fixes', details: ['Mitigation strategies'] }
    ]
  },
  {
    id: 'reframing',
    name: 'Reframing Matrix',
    description: 'Looking at a problem from multiple perspectives.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Business', name: 'Product View', details: ['Technical features'] },
      { id: 'Sales', name: 'Sales View', details: ['Customer benefits'] },
      { id: 'Technical', name: 'Legal View', details: ['Compliance and risk'] },
      { id: 'Admin', name: 'User View', details: ['Ease of use'] }
    ]
  },
  {
    id: 'cps-process',
    name: 'Osborne-Parnes CPS',
    description: 'Six-step process for creative problem solving.',
    category: 'Problem Solving & Decision Making',
    layout: 'cycle',
    sections: [
      { id: 'Objective', name: 'Identify Objectives', details: ['Goal setting'] },
      { id: 'Fact', name: 'Gather Facts', details: ['Data and information'] },
      { id: 'Problem', name: 'Identify Problems', details: ['Core issue'] },
      { id: 'Idea', name: 'Idea Generation', details: ['Divergent thinking'] },
      { id: 'Solution', name: 'Identify Solutions', details: ['Targeted fixing'] },
      { id: 'Acceptance', name: 'Plan for Action', details: ['Implementation'] }
    ]
  },
  {
    id: 'heilmeier',
    name: 'Heilmeier Catechism',
    description: 'A set of questions for evaluating research and development projects.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Objective', name: 'Objective', details: ['What are you trying to do?'] },
      { id: 'Current', name: 'Status Quo', details: ['How is it done today?'] },
      { id: 'New', name: 'What is New?', details: ['Why will it succeed?'] },
      { id: 'Importance', name: 'Importance', details: ['Who cares?'] },
      { id: 'Risks', name: 'Risks', details: ['What are the pitfalls?'] },
      { id: 'Cost', name: 'Cost/Time', details: ['How much? How long?'] },
      { id: 'Checks', name: 'Checks', details: ['Midterm and final exams'] }
    ]
  },
  {
    id: 'ashby',
    name: 'Ashby\'s Law',
    description: 'Principle of requisite variety: only variety can destroy variety.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Variety', name: 'System Variety', details: ['Internal states'] },
      { id: 'Environment', name: 'Env. Variety', details: ['External complexity'] },
      { id: 'Regulator', name: 'Regulator', details: ['Control variety'] }
    ]
  },
  {
    id: 'change-equation',
    name: 'Change Equation',
    description: 'Formula for overcoming resistance to change.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Dissatisfaction', name: 'Dissatisfaction', details: ['Current state pain'] },
      { id: 'Vision', name: 'Vision', details: ['Desirable future state'] },
      { id: 'FirstSteps', name: 'First Steps', details: ['Practical moving forward'] },
      { id: 'Resistance', name: 'Resistance', details: ['Obstacles to overcome'] }
    ]
  },
  {
    id: 'smcr-model',
    name: 'SMCR Communication',
    description: 'Source, Message, Channel, and Receiver model.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Source', name: 'Source', details: ['Skills', 'Attitude', 'Knowledge'] },
      { id: 'Message', name: 'Message', details: ['Content', 'Elements', 'Structure'] },
      { id: 'Channel', name: 'Channel', details: ['Seeing', 'Hearing', 'Touching'] },
      { id: 'Receiver', name: 'Receiver', details: ['Decoder of message'] }
    ]
  },
  {
    id: 'bridges-transition',
    name: 'Bridges Transition',
    description: 'Managing the emotional side of change.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Ending', name: 'Ending', details: ['Letting go of the old'] },
      { id: 'Neutral', name: 'Neutral Zone', details: ['Core of transition'] },
      { id: 'Beginning', name: 'New Beginning', details: ['Acceptance and energy'] }
    ]
  },
  {
    id: 'congruence-model',
    name: 'Nadler-Tushman Congruence',
    description: 'Organizational analysis focused on alignment.',
    category: 'Strategy & Innovation',
    layout: 'congruence',
    sections: [
      { id: 'Inputs', name: 'Inputs', details: ['Strategy', 'Environment', 'Resources'] },
      { id: 'Work', name: 'Work', details: ['Tasks', 'Processes'] },
      { id: 'People', name: 'People', details: ['Skills', 'Needs'] },
      { id: 'Structure', name: 'Formal Org', details: ['Hierarchy', 'Systems'] },
      { id: 'Culture', name: 'Informal Org', details: ['Values', 'Norms'] },
      { id: 'Outputs', name: 'Outputs', details: ['Individual', 'Unit', 'Org performance'] }
    ]
  },
  {
    id: 'cultural-web',
    name: 'Cultural Web',
    description: 'Analyzing the paradigm and elements of organizational culture.',
    category: 'Leadership & Teams',
    layout: 'cultural-web',
    sections: [
      { id: 'Paradigm', name: 'The Paradigm', details: ['Core assumptions'] },
      { id: 'Stories', name: 'Stories', details: ['Company myths'] },
      { id: 'Symbols', name: 'Symbols', details: ['Logos', 'Status'] },
      { id: 'Power', name: 'Power Structures', details: ['Core influence'] },
      { id: 'Org', name: 'Org Structure', details: ['Hierarchy'] },
      { id: 'Control', name: 'Control Systems', details: ['Rewards', 'Measures'] },
      { id: 'Rituals', name: 'Rituals & Routines', details: ['Daily habits'] }
    ]
  },
  {
    id: 'six-value-medals',
    name: 'Six Value Medals',
    description: 'De Bono\'s framework for assessing types of value.',
    category: 'Problem Solving & Decision Making',
    layout: 'flower',
    sections: [
      { id: 'Gold', name: 'Gold Medal', details: ['Human value'] },
      { id: 'Silver', name: 'Silver Medal', details: ['Org value'] },
      { id: 'Steel', name: 'Steel Medal', details: ['Quality value'] },
      { id: 'Glass', name: 'Glass Medal', details: ['Innovation value'] },
      { id: 'Wood', name: 'Wood Medal', details: ['Environmental value'] },
      { id: 'Brass', name: 'Brass Medal', details: ['Perceived value'] }
    ]
  },
  {
    id: 'situational-leadership',
    name: 'Situational Leadership',
    description: 'Adapting leadership style to follower development.',
    category: 'Leadership & Teams',
    layout: 'matrix',
    sections: [
      { id: 'S1', name: 'S1: Directing', details: ['High task, low relationship'] },
      { id: 'S2', name: 'S2: Coaching', details: ['High task, high relationship'] },
      { id: 'S3', name: 'S3: Supporting', details: ['Low task, high relationship'] },
      { id: 'S4', name: 'S4: Delegating', details: ['Low task, low relationship'] }
    ]
  },
  {
    id: 'lencioni',
    name: 'Five Dysfunctions of a Team',
    description: 'Identifying and overcoming common team dysfunctions.',
    category: 'Leadership & Teams',
    layout: 'pyramid',
    sections: [
      { id: 'Results', name: 'Inattention to Results', details: ['Focus on collective goals'] },
      { id: 'Accountability', name: 'Avoidance of Accountability', details: ['Call out peers'] },
      { id: 'Commitment', name: 'Lack of Commitment', details: ['Ensure buy-in'] },
      { id: 'Conflict', name: 'Fear of Conflict', details: ['Healthy debate'] },
      { id: 'Trust', name: 'Absence of Trust', details: ['Be vulnerable'] }
    ]
  },
  {
    id: 'portfolio-map',
    name: 'Business Portfolio Map',
    description: 'Managing existing business models and new ventures.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Exploit', name: 'Exploit (Existing)', details: ['Search for efficiency'] },
      { id: 'Explore', name: 'Explore (New)', details: ['Search for new value'] }
    ]
  },
  {
    id: 'pest',
    name: 'PEST Analysis',
    description: 'Analyzing political, economic, social, and technological factors.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Political', name: 'Political', details: ['Regulations', 'Stability'] },
      { id: 'Economic', name: 'Economic', details: ['Interest rates', 'Inflation'] },
      { id: 'Social', name: 'Social', details: ['Demographics', 'Culture'] },
      { id: 'Technological', name: 'Technological', details: ['Innovation', 'R&D'] }
    ]
  },
  {
    id: 'product-lifecycle',
    name: 'Product Life Cycle',
    description: 'Stages of a product\'s life from introduction to decline.',
    category: 'Strategy & Innovation',
    layout: 'bell-curve',
    sections: [
      { id: 'Intro', name: 'Introduction', details: ['Market entry'] },
      { id: 'Growth', name: 'Growth', details: ['Scaling sales'] },
      { id: 'Maturity', name: 'Maturity', details: ['Peak market share'] },
      { id: 'Decline', name: 'Decline', details: ['Market exit'] }
    ]
  },
  {
    id: 'shell-matrix',
    name: 'Shell Directional Policy',
    description: '3x3 matrix for analyzing business prospects.',
    category: 'Strategy & Innovation',
    layout: 'grid',
    sections: [
      { id: 'Leader', name: 'Leader', details: ['Strong sector / High attractiveness'] },
      { id: 'Growth', name: 'Growth', details: ['Strong sector / Medium attractiveness'] },
      { id: 'Custodial', name: 'Custodial', details: ['Weak sector / Low attractiveness'] }
    ]
  },
  {
    id: 'tuckman',
    name: 'Tuckman\'s Stages',
    description: 'Phases of group development: Forming to Adjourning.',
    category: 'Leadership & Teams',
    layout: 'linear',
    sections: [
      { id: 'Forming', name: 'Forming', details: ['Polite, uncertain'] },
      { id: 'Storming', name: 'Storming', details: ['Conflict, styles clash'] },
      { id: 'Norming', name: 'Norming', details: ['Cohesion, shared leadership'] },
      { id: 'Performing', name: 'Performing', details: ['Autonomy, goal focus'] },
      { id: 'Adjourning', name: 'Adjourning', details: ['Closing down'] }
    ]
  },
  {
    id: 'weisbord',
    name: 'Weisbord\'s Six-Box',
    description: 'Diagnosing organizational problems across six areas.',
    category: 'Leadership & Teams',
    layout: 'flower',
    sections: [
      { id: 'Purposes', name: 'Purposes', details: ['Goal clarity'] },
      { id: 'Structure', name: 'Structure', details: ['Work distribution'] },
      { id: 'Relationships', name: 'Relationships', details: ['Conflict management'] },
      { id: 'Rewards', name: 'Rewards', details: ['Equity and incentives'] },
      { id: 'Leadership', name: 'Leadership', details: ['System control'] },
      { id: 'Mechanisms', name: 'Helpful Mechanisms', details: ['Policies, tools'] }
    ]
  },
  {
    id: 'strategy-diamond',
    name: 'Strategy Diamond',
    description: 'Five integrated elements of a strategy.',
    category: 'Strategy & Innovation',
    layout: 'strategy-diamond',
    sections: [
      { id: 'Arenas', name: 'Arenas', details: ['Where will we be active?'] },
      { id: 'Vehicles', name: 'Vehicles', details: ['How will we get there?'] },
      { id: 'Differentiators', name: 'Differentiators', details: ['How will we win?'] },
      { id: 'Staging', name: 'Staging', details: ['Speed and sequence'] },
      { id: 'Logic', name: 'Economic Logic', details: ['How will we obtain returns?'] }
    ]
  },
  {
    id: 'pmbok',
    name: 'PMBOK Guide',
    description: 'The Project Management Body of Knowledge framework.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Initiating', name: 'Initiating', details: ['Project charter'] },
      { id: 'Planning', name: 'Planning', details: ['Scope and schedule'] },
      { id: 'Executing', name: 'Executing', details: ['Deliverables'] },
      { id: 'Monitoring', name: 'Monitoring', details: ['Quality and risk'] },
      { id: 'Closing', name: 'Closing', details: ['Project finalization'] }
    ]
  },
  {
    id: 'bcg-matrix',
    name: 'BCG Matrix',
    description: 'Growth-Share Matrix for portfolio analysis.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'High Share', high: 'Low Share' },
      y: { low: 'Low Growth', high: 'High Growth' }
    },
    sections: [
      { id: 'Stars', name: 'Stars', details: ['High growth, High share', 'Invest for growth'] },
      { id: 'QuestionMarks', name: 'Question Marks', details: ['High growth, Low share', 'Analyze potential'] },
      { id: 'CashCows', name: 'Cash Cows', details: ['Low growth, High share', 'Milk for cash'] },
      { id: 'Dogs', name: 'Dogs', details: ['Low growth, Low share', 'Divest or liquidate'] }
    ]
  },
  {
    id: 'ansoff-matrix',
    name: 'Ansoff Matrix',
    description: 'Product/Market expansion grid for growth strategy.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'Existing Products', high: 'New Products' },
      y: { low: 'Existing Markets', high: 'New Markets' }
    },
    sections: [
      { id: 'MarketDevelopment', name: 'Market Development', details: ['Existing product, New market'] },
      { id: 'Diversification', name: 'Diversification', details: ['New product, New market'] },
      { id: 'MarketPenetration', name: 'Market Penetration', details: ['Existing product, Existing market'] },
      { id: 'ProductDevelopment', name: 'Product Development', details: ['New product, Existing market'] }
    ]
  },
  {
    id: 'brand-archetypes',
    name: 'Brand Archetypes',
    description: 'Twelve universal character types used to anchor a brand\'s voice, storytelling, and emotional personality.',
    category: 'Marketing & Sales',
    layout: 'cycle',
    sections: [
      { id: 'Innocent', name: 'The Innocent', details: ['Optimism and simplicity', 'Pure, honest messaging', 'Trustworthy brand promise'], tips: 'Does your brand promise safety, simplicity, and optimism?' },
      { id: 'Explorer', name: 'The Explorer', details: ['Freedom and discovery', 'Adventure-driven tone', 'Autonomy and curiosity'], tips: 'How do you inspire customers to chart new territory?' },
      { id: 'Sage', name: 'The Sage', details: ['Wisdom and truth', 'Research-backed authority', 'Objective, analytical voice'], tips: 'What unique expertise or insight makes you a trusted advisor?' },
      { id: 'Hero', name: 'The Hero', details: ['Courage and mastery', 'Overcoming big challenges', 'Empowering calls to action'], tips: 'What obstacle do you help your customer conquer?' },
      { id: 'Outlaw', name: 'The Outlaw', details: ['Disruption and rebellion', 'Challenging the status quo', 'Bold, unapologetic stance'], tips: 'Which industry convention is your brand actively breaking?' },
      { id: 'Magician', name: 'The Magician', details: ['Transformation and vision', 'Turning ideas into reality', 'Memorable aha moments'], tips: 'What seemingly impossible transformation do you deliver?' },
      { id: 'Everyman', name: 'The Regular Guy', details: ['Belonging and empathy', 'Down-to-earth language', 'Everyday reliability'], tips: 'How does your brand feel approachable and inclusive to all?' },
      { id: 'Lover', name: 'The Lover', details: ['Intimacy and passion', 'Sensory brand aesthetics', 'Deep emotional connection'], tips: 'How do you make customers feel valued and desired?' },
      { id: 'Jester', name: 'The Jester', details: ['Joy and humor', 'Playful brand banter', 'Lightening serious moments'], tips: 'Where can wit and delight set your brand apart?' },
      { id: 'Caregiver', name: 'The Caregiver', details: ['Compassion and protection', 'Service-first posture', 'Reassuring guidance'], tips: 'How do you actively protect and nurture your audience?' },
      { id: 'Creator', name: 'The Creator', details: ['Imagination and craft', 'Self-expression tools', 'Originality in design'], tips: 'How does your product empower customers to build or express?' },
      { id: 'Ruler', name: 'The Ruler', details: ['Control and leadership', 'Premium quality standards', 'Order and prestige'], tips: 'How do you embody category leadership and certainty?' }
    ],
    interactiveHints: 'Group sticky notes onto 1 primary archetype and 1 supporting shadow archetype to sharpen brand voice.'
  },
  {
    id: 'bullseye-framework',
    name: 'Bullseye Framework',
    description: 'Prioritizes customer acquisition channels into three rings: core traction channels, potentials, and long-shots.',
    category: 'Marketing & Sales',
    layout: 'circles',
    sections: [
      { id: 'CoreTraction', name: 'Inner Ring: Core Traction', details: ['Top 1-3 proven channels', 'Lowest CAC / highest ROI', 'Double-down scaling experiments'], tips: 'Which single channel is driving the strongest repeatable growth right now?' },
      { id: 'Potentials', name: 'Middle Ring: Promising Potentials', details: ['3-6 cheap test channels', 'Early positive signal', 'Next-in-line hypotheses'], tips: 'What low-cost experiments can validate these channels this sprint?' },
      { id: 'LongShots', name: 'Outer Ring: What\'s Possible', details: ['Brainstorm all 19 channels', 'Unexplored or unconventional plays', 'Long-term bets'], tips: 'Which overlooked channel are competitors completely ignoring?' }
    ],
    interactiveHints: 'Promote sticky notes inward as cheap channel tests prove unit-economic traction.'
  },
  {
    id: 'customer-journey-map',
    name: 'Customer Journey Map',
    description: 'Visual timeline charting customer actions, touchpoints, thoughts, emotions, and pain points across a brand.',
    category: 'Marketing & Sales',
    layout: 'linear',
    sections: [
      { id: 'Discovery', name: 'Discovery & Awareness', details: ['Initial trigger or need', 'Search, social, or referral touchpoints', 'First impression & questions'], tips: 'How do buyers first realize they have a problem you solve?' },
      { id: 'Consideration', name: 'Consideration & Evaluation', details: ['Comparison shopping', 'Reviews, demos, and content', 'Friction and trust hurdles'], tips: 'What doubts or questions stall prospects during evaluation?' },
      { id: 'Purchase', name: 'Purchase & Conversion', details: ['Checkout or contract flow', 'Pricing transparency', 'Emotional highs and drop-offs'], tips: 'Where does friction cause buyers to abandon right before paying?' },
      { id: 'Onboarding', name: 'Onboarding & Usage', details: ['First value moment (Aha!)', 'Setup support and learning curve', 'Product engagement habits'], tips: 'How quickly does a new customer experience core value?' },
      { id: 'SupportLoyalty', name: 'Support & Advocacy', details: ['Help desk and issue resolution', 'Renewal and upsell moments', 'Word-of-mouth referrals'], tips: 'What turns satisfied buyers into vocal brand advocates?' }
    ],
    interactiveHints: 'Tag each stage with both customer emotion notes and internal ownership fixes.'
  },
  {
    id: 'elm-model',
    name: 'Elaboration Likelihood Model (ELM)',
    description: 'Persuasion model distinguishing between the Central (logic-heavy) and Peripheral (cue-heavy) cognitive routes.',
    category: 'Marketing & Sales',
    layout: 'columns',
    sections: [
      { id: 'CentralRoute', name: 'Central Route (High Elaboration)', details: ['Data, ROI proofs, and logic', 'Detailed feature comparisons', 'Case studies and whitepapers', 'High-involvement buyers'], tips: 'What rigorous evidence will convince motivated, analytical buyers?' },
      { id: 'PeripheralRoute', name: 'Peripheral Route (Low Elaboration)', details: ['Social proof and testimonials', 'Visual appeal and celebrity cues', 'Emotional storytelling and scarcity', 'Quick-scan heuristics'], tips: 'Which surface cues build instant trust when attention is scarce?' }
    ],
    interactiveHints: 'Balance sticky notes across both columns so messaging persuades both fast scanners and deep evaluators.'
  },
  {
    id: 'hook-model',
    name: 'Hook Model',
    description: 'Continuous four-step loop for building habit-forming products: Trigger, Action, Variable Reward, and Investment.',
    category: 'Strategy & Innovation',
    layout: 'cycle',
    sections: [
      { id: 'Trigger', name: 'Trigger', details: ['External cues (notifications, emails)', 'Internal cues (boredom, uncertainty, FOMO)', 'Context prompting return'], tips: 'What internal emotion prompts users to open your product unprompted?' },
      { id: 'Action', name: 'Action', details: ['Simplest behavior in anticipation', 'Friction reduction (fewer clicks)', 'Ability + motivation threshold'], tips: 'What is the absolute smallest action a user takes right after the trigger?' },
      { id: 'VariableReward', name: 'Variable Reward', details: ['Rewards of the tribe (social)', 'Rewards of the hunt (resources/info)', 'Rewards of the self (mastery)'], tips: 'What unpredictable payoff keeps the user curious to return?' },
      { id: 'Investment', name: 'Investment', details: ['User-generated data or content', 'Reputation, followers, or setup', 'Loading the next trigger'], tips: 'What bit of work makes the product better the more the user uses it?' }
    ],
    interactiveHints: 'Trace how the final Investment note feeds directly into the next external or internal Trigger.'
  },
  {
    id: 'kano-model',
    name: 'Kano Model',
    description: 'Classifies product features into Basic (Must-Be), Performance, and Excitement (Delighters) by customer satisfaction.',
    category: 'Strategy & Innovation',
    layout: 'columns',
    sections: [
      { id: 'MustBe', name: 'Must-Be (Basic)', details: ['Expected table-stakes features', 'Absence causes strong dissatisfaction', 'Presence yields neutral baseline'], tips: 'What non-negotiable basics break user trust if missing or buggy?' },
      { id: 'Performance', name: 'Performance (One-Dimensional)', details: ['More is better (speed, capacity, price)', 'Direct linear satisfaction impact', 'Primary competitive battleground'], tips: 'Which measurable metrics directly win or lose head-to-head deals?' },
      { id: 'Delighters', name: 'Excitement (Delighters)', details: ['Unexpected wow moments', 'Not missed if absent', 'High differentiation before commoditization'], tips: 'What surprising touch will make customers tell others about your product?' }
    ],
    interactiveHints: 'Move yesterday\'s Delighters toward Must-Be over time as competitors copy them.'
  },
  {
    id: 'marketing-funnel',
    name: 'Marketing Funnel (TOFU, MOFU, BOFU)',
    description: 'Organizes content and buyer touchpoints across Top of Funnel (Awareness), Middle (Consideration), and Bottom (Decision).',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'TOFU', name: 'Top of Funnel (TOFU - Awareness)', details: ['Blog posts and SEO guides', 'Social media and short videos', 'Podcasts and educational webinars'], tips: 'How do you attract broad, problem-aware prospects without hard selling?' },
      { id: 'MOFU', name: 'Middle of Funnel (MOFU - Consideration)', details: ['Whitepapers and templates', 'Comparison sheets and case studies', 'Email nurture sequences'], tips: 'What mid-funnel proof helps prospects evaluate your approach?' },
      { id: 'BOFU', name: 'Bottom of Funnel (BOFU - Decision)', details: ['Live demos and free trials', 'ROI calculators and pricing pages', 'Sales consultations and guarantees'], tips: 'What removes final purchase friction and closes the deal?' }
    ],
    interactiveHints: 'Map each piece of content to a funnel stage and spot gaps where leads stall.'
  },
  {
    id: 'peso-model',
    name: 'PESO Model',
    description: 'Integrates Paid, Earned, Shared, and Owned media channels into a unified communications strategy.',
    category: 'Marketing & Sales',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'Internal Control', high: 'External Credibility' },
      y: { low: 'Owned & Community', high: 'Amplified Reach' }
    },
    sections: [
      { id: 'Paid', name: 'Paid Media', details: ['Search and social ads', 'Sponsored content & influencers', 'Retargeting campaigns'], tips: 'Where can paid spend amplify your best owned and earned assets?' },
      { id: 'Earned', name: 'Earned Media', details: ['Press coverage and PR', 'Industry analyst mentions', 'Guest articles and podcasts'], tips: 'What third-party credibility will validate your brand story?' },
      { id: 'Owned', name: 'Owned Media', details: ['Website and blog', 'Email newsletters', 'Original research & docs'], tips: 'Which content assets do you fully own independent of platform algorithms?' },
      { id: 'Shared', name: 'Shared Media', details: ['Organic social communities', 'User-generated content', 'Forum & peer discussions'], tips: 'How do you spark two-way conversation and organic sharing?' }
    ],
    interactiveHints: 'Place sticky notes in each quadrant and look for ways Earned wins can fuel Paid and Shared distribution.'
  },
  {
    id: 'rfm-analysis',
    name: 'RFM Analysis',
    description: 'Segments customers by Recency of purchase, Frequency of orders, and Monetary value spent.',
    category: 'Marketing & Sales',
    layout: 'columns',
    sections: [
      { id: 'Recency', name: 'Recency (Last Purchase)', details: ['Days since last order (1-5 score)', 'Win-back triggers for lapsing users', 'Active vs dormant thresholds'], tips: 'At what inactivity window do customers typically churn forever?' },
      { id: 'Frequency', name: 'Frequency (Order Cadence)', details: ['Total transactions in period (1-5 score)', 'Repeat-buyer habit triggers', 'Cross-sell timing'], tips: 'What moves a one-time buyer into a second and third purchase?' },
      { id: 'Monetary', name: 'Monetary (Total Spend)', details: ['Cumulative & average order value (1-5 score)', 'VIP / Champions tier perks', 'Margin-focused retention offers'], tips: 'Which top-spending segment deserves bespoke concierge retention?' }
    ],
    interactiveHints: 'Define 1–5 scoring rules in each column, then add targeted campaigns for Champions vs At-Risk segments.'
  },
  {
    id: 'value-proposition-canvas',
    name: 'Value Proposition Canvas',
    description: 'Aligns the product Value Map (Products, Pain Relievers, Gain Creators) directly with the Customer Profile (Jobs, Pains, Gains).',
    category: 'Strategy & Innovation',
    layout: 't-chart',
    sections: [
      { id: 'ValueMap', name: 'Value Map (Product Offering)', details: ['Products & Services offered', 'Pain Relievers (how you eliminate friction)', 'Gain Creators (how you deliver upside)'], tips: 'Which specific product features directly relieve top customer pains?' },
      { id: 'CustomerProfile', name: 'Customer Profile (Segment)', details: ['Customer Jobs (functional, social, emotional)', 'Customer Pains (risks, obstacles, frustrations)', 'Customer Gains (required & desired outcomes)'], tips: 'Which jobs and pains matter most to the customer right now?' }
    ],
    interactiveHints: 'Verify Problem-Solution Fit by pairing every Customer Pain/Gain note with a matching Pain Reliever/Gain Creator.'
  },
  {
    id: 'brand-identity-prism',
    name: 'Brand Identity Prism',
    description: 'Kapferer\'s six-facet model mapping Physique, Personality, Culture, Relationship, Reflection, and Self-Image.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Physique', name: 'Physique (External / Sender)', details: ['Tangible product features', 'Logo, colors, and packaging', 'Immediate visual signature'], tips: 'What physical or visual cues make the brand instantly recognizable?' },
      { id: 'Personality', name: 'Personality (Internal / Sender)', details: ['Tone of voice and character', 'Human traits if brand were a person', 'Communication style'], tips: 'How would your brand speak and behave if it walked into a room?' },
      { id: 'Culture', name: 'Culture (Internal Core)', details: ['Origin values and ethos', 'Organizational principles', 'Country or craft heritage'], tips: 'What non-negotiable beliefs guide every internal product decision?' },
      { id: 'Relationship', name: 'Relationship (Bridge)', details: ['How brand interacts with buyers', 'Service ethos and trust contract', 'Community rituals'], tips: 'What kind of relationship (mentor, partner, luxury host) do you build?' },
      { id: 'Reflection', name: 'Reflection (External / Receiver)', details: ['Perceived stereotypical user', 'Who buyers look like to others', 'Aspirational peer group'], tips: 'How does using your brand make the customer appear to peers?' },
      { id: 'SelfImage', name: 'Self-Image (Internal / Receiver)', details: ['Customer\'s internal mirror', 'How the brand makes them feel inside', 'Personal identity reinforcement'], tips: 'What does the customer say about themselves by choosing you?' }
    ],
    interactiveHints: 'Keep internal culture/personality tightly aligned with external physique and customer reflection.'
  },
  {
    id: 'ehrenberg-bass',
    name: 'Ehrenberg-Bass Laws of Growth',
    description: 'Evidence-based marketing principles emphasizing Mental Availability, Physical Availability, and broad market penetration.',
    category: 'Marketing & Sales',
    layout: 'columns',
    sections: [
      { id: 'MentalAvailability', name: 'Mental Availability', details: ['Distinctive Brand Assets (colors, shapes, jingles)', 'Category Entry Points (buying situations)', 'Consistent memory-building reach'], tips: 'In which buying moments does your brand immediately come to mind?' },
      { id: 'PhysicalAvailability', name: 'Physical Availability', details: ['Shelf, search, and channel presence', 'Frictionless purchase & checkout', 'Portfolio coverage across formats'], tips: 'How easy is it for any category buyer to find and buy you right now?' },
      { id: 'PenetrationGrowth', name: 'Broad Market Penetration', details: ['Target light & non-buyers, not just heavy loyalists', 'Broad reach over hyper-narrow targeting', 'Double Jeopardy awareness'], tips: 'How are you reaching light category buyers who rarely think about you?' }
    ],
    interactiveHints: 'Audit whether campaigns prioritize distinctive brand assets and light-buyer reach over niche loyalty tweaks.'
  },
  {
    id: 'hierarchy-of-effects',
    name: 'Hierarchy of Effects Model',
    description: 'Traces advertising impact across six sequential stages: Awareness, Knowledge, Liking, Preference, Conviction, and Purchase.',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'Awareness', name: 'Awareness (Cognitive)', details: ['Brand name recognition', 'Top-of-mind ad recall', 'Broad reach impressions'], tips: 'Do target buyers know your brand exists?' },
      { id: 'Knowledge', name: 'Knowledge (Cognitive)', details: ['Core product facts & specs', 'How it works and who it serves', 'Educational assets'], tips: 'Can prospects accurately explain what your offering does?' },
      { id: 'Liking', name: 'Liking (Affective)', details: ['Positive emotional attitude', 'Brand affinity and aesthetic fit', 'Relatable storytelling'], tips: 'What creates genuine warmth and favorable sentiment toward the brand?' },
      { id: 'Preference', name: 'Preference (Affective)', details: ['Favorable comparison vs rivals', 'Clear differentiation', 'Preferred shortlist status'], tips: 'Why should a buyer pick you over familiar alternatives?' },
      { id: 'Conviction', name: 'Conviction (Conative)', details: ['Belief that purchase is the right move', 'Overcoming risk with social proof', 'Intent to buy'], tips: 'What guarantees or reviews turn preference into firm intent?' },
      { id: 'Purchase', name: 'Purchase (Conative)', details: ['Clear call to action', 'Frictionless trial or checkout', 'Promotional nudge'], tips: 'What final prompt converts intent into a completed transaction?' }
    ],
    interactiveHints: 'Diagnose where drop-offs occur between Cognitive (knowing), Affective (feeling), and Conative (acting) stages.'
  },
  {
    id: 'lavidge-steiner',
    name: 'Lavidge-Steiner Model',
    description: 'Six-step advertising response model linking Cognitive, Affective, and Conative consumer progression from Unaware to Purchase.',
    category: 'Marketing & Sales',
    layout: 'funnel',
    sections: [
      { id: 'Awareness', name: 'Awareness (Cognitive)', details: ['Breaking through noise', 'Initial brand exposure', 'Memorability hooks'], tips: 'How will cold audiences notice your message first?' },
      { id: 'Knowledge', name: 'Knowledge (Cognitive)', details: ['Feature and benefit clarity', 'Product category framing', 'FAQ and explainer copy'], tips: 'What key facts must prospects grasp before evaluating?' },
      { id: 'Liking', name: 'Liking (Affective)', details: ['Emotional resonance', 'Brand tone alignment', 'Trust signals'], tips: 'What emotional chord builds positive rapport?' },
      { id: 'Preference', name: 'Preference (Affective)', details: ['Competitive superiority claims', 'Unique value framing', 'Side-by-side strengths'], tips: 'Which differentiator earns shortlist preference?' },
      { id: 'Conviction', name: 'Conviction (Conative)', details: ['Desire paired with urgency', 'Risk-reversal offers', 'Case-study validation'], tips: 'What removes the last hesitation to act?' },
      { id: 'Purchase', name: 'Purchase (Conative)', details: ['Point-of-sale triggers', 'Simple conversion path', 'Post-click follow-through'], tips: 'Is the final step to buy effortless and unmistakable?' }
    ],
    interactiveHints: 'Attach specific campaign KPIs (recall, sentiment, conversion rate) to each tier of the funnel.'
  },
  {
    id: 'maslow-marketing',
    name: 'Maslow\'s Hierarchy of Needs (Marketing)',
    description: 'Pyramid of human motivation adapted to align product benefits and marketing copy from basic survival to self-actualization.',
    category: 'Marketing & Sales',
    layout: 'pyramid',
    sections: [
      { id: 'SelfActualization', name: 'Self-Actualization', details: ['Purpose, creativity, and mastery', 'Legacy and personal growth', 'Aspirational transformation'], tips: 'How does your product help customers become their best self?' },
      { id: 'Esteem', name: 'Esteem & Status', details: ['Prestige, recognition, and confidence', 'Achievement and peer respect', 'Premium craftsmanship'], tips: 'What status or accomplishment does owning your brand signal?' },
      { id: 'Social', name: 'Belonging & Social', details: ['Community, connection, and tribe', 'Shared identity and acceptance', 'Family and peer warmth'], tips: 'How does your offering connect users to people who matter to them?' },
      { id: 'Safety', name: 'Safety & Security', details: ['Reliability, warranties, and trust', 'Risk reduction and protection', 'Predictability and peace of mind'], tips: 'What fears or risks does your guarantee eliminate?' },
      { id: 'Physiological', name: 'Physiological (Baseline)', details: ['Essential utility, speed, and sustenance', 'Core functional survival needs', 'Affordable access'], tips: 'Which fundamental, non-negotiable utility does your product satisfy first?' }
    ],
    interactiveHints: 'Map each marketing claim to its true motivation tier—avoid selling status before safety is proven.'
  },
  {
    id: 'porters-generic-strategies',
    name: 'Porter\'s Generic Strategies',
    description: 'Four strategic positions for sustainable competitive advantage based on broad vs narrow market scope and cost vs differentiation.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'Cost Advantage', high: 'Differentiation Advantage' },
      y: { low: 'Narrow Scope (Focus)', high: 'Broad Market Scope' }
    },
    sections: [
      { id: 'CostLeadership', name: 'Cost Leadership (Broad / Cost)', details: ['Economies of scale and volume', 'Operational efficiency & low overhead', 'Mass-market price competitiveness'], tips: 'How can you maintain the lowest unit cost across the entire industry?' },
      { id: 'Differentiation', name: 'Differentiation (Broad / Unique)', details: ['Superior brand, design, or technology', 'Price premium justified by unique value', 'High switching costs'], tips: 'What unique value will broad buyers happily pay a premium for?' },
      { id: 'CostFocus', name: 'Cost Focus (Niche / Cost)', details: ['Underserved price-sensitive niche', 'Stripped-down targeted offering', 'Tailored lean cost structure'], tips: 'Which specific niche is over-served and overcharged by incumbents?' },
      { id: 'DifferentiationFocus', name: 'Differentiation Focus (Niche / Unique)', details: ['Bespoke capabilities for a narrow segment', 'Deep domain specialization', 'High niche customer loyalty'], tips: 'What specialized needs in a narrow segment can you solve better than broad rivals?' }
    ],
    interactiveHints: 'Commit clearly to one primary quadrant to avoid getting "stuck in the middle" with weak margins.'
  },
  {
    id: 'service-dominant-logic',
    name: 'Service-Dominant Logic',
    description: 'Reframes value creation around continuous service exchange, resource integration, and customer co-creation rather than static goods.',
    category: 'Marketing & Sales',
    layout: 'circles',
    sections: [
      { id: 'ValueCoCreation', name: 'Value Co-Creation (Core)', details: ['Value-in-use realized by the customer', 'Mutual outcome design', 'Ongoing relationship equity'], tips: 'How does the customer actively participate in creating the final value?' },
      { id: 'ServiceExchange', name: 'Service Exchange', details: ['Knowledge, skills, and capabilities applied', 'Goods as distribution mechanisms for service', 'Dynamic feedback loops'], tips: 'What specialized competence are you really delivering through your product?' },
      { id: 'ResourceIntegration', name: 'Resource Integration', details: ['Partner networks and ecosystems', 'Customer data, context, and tools', 'Platform infrastructure'], tips: 'Which external partner and customer resources amplify the service ecosystem?' }
    ],
    interactiveHints: 'Shift sticky notes from static "feature delivery" toward ongoing "customer capability and co-created outcomes".'
  },
  {
    id: 'shannon-weaver',
    name: 'Shannon-Weaver Model of Communication',
    description: 'Linear information model tracing a message through Sender, Encoder, Channel (with Noise), Decoder, and Receiver.',
    category: 'Change & Communication',
    layout: 'linear',
    sections: [
      { id: 'Sender', name: 'Information Source (Sender)', details: ['Core intent and key message', 'Desired audience action', 'Clarity of purpose'], tips: 'What is the single unmistakable message you intend to convey?' },
      { id: 'Transmitter', name: 'Transmitter (Encoder)', details: ['Language, visuals, and framing', 'Formatting for the audience', 'Jargon removal'], tips: 'How is the raw idea encoded so the target audience understands it instantly?' },
      { id: 'ChannelNoise', name: 'Channel & Noise', details: ['Medium (email, town hall, Slack, deck)', 'Competing distractions and ambiguity', 'Technical or cultural distortion'], tips: 'What physical, semantic, or organizational noise could distort this message?' },
      { id: 'Receiver', name: 'Receiver (Decoder)', details: ['Audience interpretation and context', 'Existing mental models', 'Perceived tone'], tips: 'How might different stakeholders decode this message differently?' },
      { id: 'DestinationFeedback', name: 'Destination & Feedback', details: ['Confirmation of understanding', 'Observable behavior change', 'Two-way feedback loop'], tips: 'How will you verify the received meaning matched your original intent?' }
    ],
    interactiveHints: 'Highlight noise risks in the middle channel section and pair each with a verification feedback check.'
  },
  {
    id: 'four-horsemen-sales',
    name: 'The Four Horsemen of Sales',
    description: 'Modern revenue execution framework built on four pillars: Personalization, Precision, Performance, and Productivity.',
    category: 'Marketing & Sales',
    layout: 'grid',
    sections: [
      { id: 'Personalization', name: 'Personalization', details: ['Account-specific pain insights', 'Tailored outreach & buyer personas', 'Contextual value messaging'], tips: 'How is every touchpoint tailored to the buyer\'s exact industry and role?' },
      { id: 'Precision', name: 'Precision', details: ['ICP scoring and intent signals', 'Pipeline qualification hygiene', 'Right-time, right-channel targeting'], tips: 'Are reps focusing effort strictly on high-propensity ICP accounts?' },
      { id: 'Performance', name: 'Performance', details: ['Win rates and quota attainment', 'Deal velocity and stage conversion', 'Coaching & call scorecards'], tips: 'Which bottleneck stage is slowing down overall conversion?' },
      { id: 'Productivity', name: 'Productivity', details: ['CRM automation and AI workflows', 'Reduced admin & manual research', 'More active selling time per rep'], tips: 'What repetitive admin work can be automated to give reps back selling hours?' }
    ],
    interactiveHints: 'Balance tactical automation notes in Productivity with human buyer relevance notes in Personalization.'
  },
  {
    id: 'challenger-sale',
    name: 'The Challenger Sale Model',
    description: 'B2B sales methodology built around three high-performing rep behaviors: Teach, Tailor, and Take Control.',
    category: 'Marketing & Sales',
    layout: 'linear',
    sections: [
      { id: 'Teach', name: '1. Teach for Differentiation', details: ['Reframe how the buyer sees their problem', 'Share provocative industry benchmarks', 'Lead to your unique strengths'], tips: 'What counter-intuitive insight will make the buyer rethink their status quo?' },
      { id: 'Tailor', name: '2. Tailor for Resonance', details: ['Align insight to stakeholder role (CFO, CTO, Ops)', 'Connect to company-specific KPIs', 'Address internal politics and priorities'], tips: 'How does this value story change for the economic buyer vs technical user?' },
      { id: 'TakeControl', name: '3. Take Control of the Sale', details: ['Constructive tension on pricing & value', 'Mutual action plans and clear next steps', 'Preventing stalled "no-decision" deals'], tips: 'Where must you push back politely to keep deal momentum and margin intact?' }
    ],
    interactiveHints: 'Sequence sticky notes from commercial insight (Teach) to stakeholder customization (Tailor) to close mechanics (Take Control).'
  },
  {
    id: '5s-methodology',
    name: '5S Methodology',
    description: 'Lean workplace organization cycle for eliminating waste and sustaining visual standards: Sort, Set in Order, Shine, Standardize, Sustain.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'Sort', name: 'Sort (Seiri)', details: ['Separate needed vs unnecessary items', 'Red-tag obsolete tools and files', 'Clear clutter from work zones'], tips: 'What unused tools, inventory, or digital clutter can be removed today?' },
      { id: 'SetInOrder', name: 'Set in Order (Seiton)', details: ['A place for everything, everything in place', 'Shadow boards and labeled zones', 'Minimize motion and search time'], tips: 'Are high-frequency items stored closest to the point of use?' },
      { id: 'Shine', name: 'Shine (Seiso)', details: ['Clean and inspect workspaces daily', 'Spot leaks, wear, and defects early', 'Ownership of zone cleanliness'], tips: 'What equipment wear or hidden defects does regular cleaning reveal?' },
      { id: 'Standardize', name: 'Standardize (Seiketsu)', details: ['Visual checklists and color coding', 'Standard operating procedures (SOPs)', 'Consistent shift handoff rules'], tips: 'Are visual standards obvious enough that anyone can spot an anomaly in 5 seconds?' },
      { id: 'Sustain', name: 'Sustain (Shitsuke)', details: ['Regular 5S audits and scoring', 'Team habit reinforcement', 'Continuous feedback and recognition'], tips: 'What cadence of audits and coaching prevents sliding back into old habits?' }
    ],
    interactiveHints: 'Capture concrete floor or digital workspace actions in each step, linking audit checks in Sustain back to Sort.'
  },
  {
    id: 'affinity-diagram',
    name: 'Affinity Diagram',
    description: 'Collaborative synthesis canvas for clustering large volumes of unstructured ideas, observations, or pain points into natural themes.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Theme1', name: 'Theme Cluster A', details: ['Group closely related observations', 'Name the unifying root theme', 'Spot high-frequency patterns'], tips: 'What shared underlying cause ties these sticky notes together?' },
      { id: 'Theme2', name: 'Theme Cluster B', details: ['User or operational friction points', 'Secondary recurring patterns', 'Cross-functional dependencies'], tips: 'Does this cluster represent a distinct theme or overlap with Cluster A?' },
      { id: 'Theme3', name: 'Theme Cluster C', details: ['Emerging opportunities or quick wins', 'Outlier insights worth watching', 'Process or tooling gaps'], tips: 'Which unexpected ideas surfaced that deserve their own category?' },
      { id: 'Synthesis', name: 'Priority & Next Actions', details: ['Dot-vote top 2-3 clusters', 'Assign theme owners', 'Convert top themes into hypotheses'], tips: 'Which single cluster will unlock the most impact if solved first?' }
    ],
    interactiveHints: 'Dump raw sticky notes freely, then drag them across clusters using the Move menu until clear theme names emerge.'
  },
  {
    id: 'core-competencies',
    name: 'Core Competencies Model',
    description: 'Prahalad & Hamel\'s tree model linking deep collective capabilities (roots) to core platforms (trunk) and end products (branches).',
    category: 'Strategy & Innovation',
    layout: 'pyramid',
    sections: [
      { id: 'EndProducts', name: 'Branches: End Products & Business Units', details: ['Market-facing products and services', 'Revenue-generating business lines', 'Customer-visible value'], tips: 'Which diverse end markets can share the same underlying core platforms?' },
      { id: 'CoreProducts', name: 'Trunk: Core Products & Platforms', details: ['Shared sub-assemblies or tech engines', 'Reusable IP and proprietary modules', 'Cross-unit leverage points'], tips: 'What core components bridge your competencies to multiple market offerings?' },
      { id: 'CoreCompetencies', name: 'Roots: Core Competencies', details: ['Collective organizational learning', 'Difficult for rivals to imitate', 'Provides access to wide markets'], tips: 'What unique blend of skills and coordination gives you lasting advantage?' }
    ],
    interactiveHints: 'Test each root competency against three checks: customer value, competitor difficulty to imitate, and multi-market reach.'
  },
  {
    id: 'integrated-asset-management',
    name: 'Integrated Asset Management (IAM)',
    description: 'End-to-end physical and operational asset lifecycle loop spanning planning, engineering, operation, maintenance, and decommissioning.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'Plan', name: 'Plan', details: ['Demand forecasting and capex strategy', 'Risk & criticality assessment', 'Lifecycle cost modeling'], tips: 'Does the asset plan align with long-term capacity and reliability targets?' },
      { id: 'Design', name: 'Design', details: ['Reliability-centered engineering', 'Maintainability and safety specs', 'Standardized component selection'], tips: 'Have operations and maintenance teams reviewed failure modes in the design?' },
      { id: 'Procure', name: 'Procure', details: ['Vendor qualification and TCO bids', 'Spares and SLA agreements', 'Lead-time risk buffers'], tips: 'Are procurement decisions weighing lifecycle maintenance cost, not just capex?' },
      { id: 'Build', name: 'Build & Construct', details: ['Quality assurance during fabrication', 'Schedule & contractor control', 'As-built documentation'], tips: 'Are deviations from engineering specs captured accurately in as-built records?' },
      { id: 'Commission', name: 'Commission & Handover', details: ['Performance acceptance testing', 'Operator training and SOPs', 'CMMS / asset registry setup'], tips: 'Is every asset tagged with maintenance plans before day-one handover?' },
      { id: 'Operate', name: 'Operate', details: ['Optimal operating envelopes', 'Real-time telemetry & KPIs', 'Operator care routines'], tips: 'Are assets running within safe design limits without chronic overload?' },
      { id: 'Maintain', name: 'Maintain & Renew', details: ['Preventive and predictive maintenance', 'Root cause failure analysis', 'Turnarounds and overhauls'], tips: 'How much work is proactive predictive care vs reactive breakdown repair?' },
      { id: 'Decommission', name: 'Decommission & Replace', details: ['End-of-life risk & salvage value', 'Environmental & regulatory disposal', 'Lessons fed into next Plan cycle'], tips: 'When does rising maintenance cost justify replacement over life extension?' }
    ],
    interactiveHints: 'Track handoff friction between CapEx (Plan–Commission) and OpEx (Operate–Decommission) teams.'
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas',
    description: 'Ash Maurya\'s one-page startup adaptation of the Business Model Canvas emphasizing Problem, Solution, Key Metrics, and Unfair Advantage.',
    category: 'Strategy & Innovation',
    layout: 'bmc',
    sections: [
      { id: 'Problem', name: 'Problem', details: ['Top 3 customer problems', 'Existing alternatives used today', 'Urgency of pain'], tips: 'What are the top three hair-on-fire problems and how do users cope today?' },
      { id: 'Solution', name: 'Solution', details: ['Top 3 MVP features', 'Simplest fix per problem', 'Minimum viable scope'], tips: 'What is the smallest feature set that validates your riskiest assumption?' },
      { id: 'KeyMetrics', name: 'Key Metrics', details: ['North Star activation metric', 'Retention & conversion KPIs', 'Actionable cohort numbers'], tips: 'Which 2–3 numbers tell you honestly whether the business is working?' },
      { id: 'UVP', name: 'Unique Value Proposition', details: ['Single, clear compelling message', 'High-concept pitch', 'Why you are different and worth attention'], tips: 'Can a stranger grasp your core benefit in 5 seconds on your landing page?' },
      { id: 'UnfairAdvantage', name: 'Unfair Advantage', details: ['Cannot be easily copied or bought', 'Insider access, data moat, community', 'Proprietary IP or network effects'], tips: 'What protects you once incumbents notice your traction?' },
      { id: 'Channels', name: 'Channels', details: ['Path to early adopters', 'Free vs paid acquisition paths', 'Inbound & outbound loops'], tips: 'How will you reach your first 100 target customers cheaply?' },
      { id: 'CustomerSegments', name: 'Customer Segments', details: ['Target market segments', 'Early adopters profile', 'Buyer vs end-user distinction'], tips: 'Who is your razor-sharp early adopter with the sharpest pain?' },
      { id: 'CostStructure', name: 'Cost Structure', details: ['Customer acquisition cost (CAC)', 'Hosting, R&D, and team burn', 'Break-even runway'], tips: 'What are your fixed and variable burn drivers to reach validation?' },
      { id: 'RevenueStreams', name: 'Revenue Streams', details: ['Pricing model & tiers', 'Lifetime value (LTV)', 'Gross margin & payback period'], tips: 'How much will early adopters pay, and how soon?' }
    ],
    interactiveHints: 'Start with Problem and Customer Segments first, then pressure-test your Unique Value Proposition and Unfair Advantage.'
  },
  {
    id: 'ogsm-framework',
    name: 'OGSM Framework',
    description: 'One-page cascading execution plan translating high-level Objectives into measurable Goals, actionable Strategies, and KPI Measures.',
    category: 'Strategy & Innovation',
    layout: 'staircase',
    sections: [
      { id: 'Objective', name: 'Objective (Qualitative Direction)', details: ['Multi-year inspirational ambition', 'Clear strategic direction ("What" & "Why")', 'Single unifying statement'], tips: 'Is the Objective memorable, inspiring, and crystal clear to every employee?' },
      { id: 'Goals', name: 'Goals (Quantitative Targets)', details: ['SMART financial & market targets', 'Revenue, share, or margin milestones', 'Time-bound outcomes tied to Objective'], tips: 'How will you quantitatively prove the Objective was achieved?' },
      { id: 'Strategies', name: 'Strategies (Choices & Initiatives)', details: ['Key strategic choices ("How")', 'Resource allocation priorities', 'What we will deliberately NOT do'], tips: 'Do your 3–5 Strategies clearly explain how you will win and reach the Goals?' },
      { id: 'Measures', name: 'Measures (KPIs & Scorecards)', details: ['Leading operational indicators', 'Quarterly dashboard milestones', 'Named owners & review cadence'], tips: 'Does every Strategy have concrete leading Measures tracked weekly or monthly?' }
    ],
    interactiveHints: 'Verify vertical alignment: every Measure must track a Strategy, and every Strategy must drive a Goal.'
  },
  {
    id: 'oms-framework',
    name: 'Operating Management System (OMS) Framework',
    description: 'Enterprise governance and risk system aligning Leadership, Operational Risk, Process Execution, and Continuous Review.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'LeadershipCulture', name: 'Leadership & Governance', details: ['Accountability and clear standards', 'Safety & compliance tone from the top', 'Resource and competency commitment'], tips: 'Are leaders visibly modeling and resourcing operational standards?' },
      { id: 'RiskIdentification', name: 'Risk & Hazard Management', details: ['Process safety and operational hazards', 'Critical controls and barrier checks', 'Regulatory compliance mapping'], tips: 'What high-consequence operational risks require mandatory preventive controls?' },
      { id: 'ExecutionStandards', name: 'Standardized Execution', details: ['Documented SOPs and change control', 'Contractor and asset integrity rules', 'Incident readiness & emergency drills'], tips: 'How do you manage Management of Change (MoC) before altering procedures?' },
      { id: 'ReviewImprovement', name: 'Assurance & Continuous Review', details: ['Internal audits and leading KPIs', 'Incident root-cause learning', 'Corrective action closure'], tips: 'Are audit findings closing permanently across all operating sites?' }
    ],
    interactiveHints: 'Link every identified operational risk to a concrete SOP control and periodic assurance check.'
  },
  {
    id: 'operational-excellence',
    name: 'Operational Excellence (OE)',
    description: 'Enterprise temple model resting on Safety & Compliance, supported by Asset Reliability and People Culture, crowned by Customer Value.',
    category: 'Operations & Supply Chain',
    layout: 'pyramid',
    sections: [
      { id: 'OEGoal', name: 'Peak: Operational Excellence & Customer Value', details: ['Reliable, low-waste value stream delivery', 'Sustainable margin and agility', 'Zero-defect customer experience'], tips: 'How does operational reliability translate directly into customer advantage?' },
      { id: 'PeopleCulture', name: 'Pillar: Engaged People & Lean Culture', details: ['Frontline problem-solving empowerment', 'Visual management & daily huddles', 'Cross-functional standard work'], tips: 'Do frontline operators have the skills and autonomy to fix waste immediately?' },
      { id: 'AssetProcess', name: 'Pillar: Asset Reliability & Process Flow', details: ['High equipment uptime & OEE', 'Pull flow and bottleneck elimination', 'Data-driven quality stability'], tips: 'Where are unplanned downtime or process handoffs eroding throughput?' },
      { id: 'SafetyBase', name: 'Foundation: Safety, Quality & Compliance', details: ['Zero-harm workplace discipline', 'Regulatory and environmental integrity', 'Non-negotiable baseline standards'], tips: 'Is safety treated as an uncompromisable foundation rather than a competing target?' }
    ],
    interactiveHints: 'Anchor improvements from the Safety foundation upward before pushing throughput targets.'
  },
  {
    id: 'pareto-analysis',
    name: 'Pareto Analysis (80/20 Rule)',
    description: 'Prioritization principle identifying the vital ~20% of causes or drivers responsible for ~80% of outcomes or defects.',
    category: 'Operations & Supply Chain',
    layout: 't-chart',
    sections: [
      { id: 'VitalFew', name: 'Vital Few (Top 20% High-Impact Causes)', details: ['Root defects driving 80% of complaints', 'Top revenue-generating accounts/SKUs', 'Highest-leverage bottleneck fixes'], tips: 'Which 2 or 3 root causes, if eliminated, would resolve most of the pain?' },
      { id: 'TrivialMany', name: 'Useful Many (Remaining 80% Factors)', details: ['Low-frequency edge cases', 'Minor variations and noise', 'Defer, automate, or standardize cheaply'], tips: 'Which low-impact tasks are consuming disproportionate team bandwidth?' }
    ],
    interactiveHints: 'Score and rank causes by frequency or cost impact, then move only the top 20% drivers into immediate action.'
  },
  {
    id: 'raci-matrix',
    name: 'RACI Matrix',
    description: 'Governance checklist clarifying cross-functional roles per deliverable: Responsible, Accountable, Consulted, and Informed.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'Responsible', name: 'Responsible (R - Does the Work)', details: ['Task owners executing the deliverable', 'Can be shared across contributors', 'Clear handoff deliverables'], tips: 'Who is physically doing the work on each key task?' },
      { id: 'Accountable', name: 'Accountable (A - Single Decision Owner)', details: ['Exactly one person per deliverable', 'Final sign-off & veto authority', 'Owns ultimate outcome'], tips: 'Does every critical task have strictly ONE Accountable owner?' },
      { id: 'Consulted', name: 'Consulted (C - Two-Way Input)', details: ['Subject-matter experts (Legal, Security, Ops)', 'Reviewed before decisions finalize', 'Active two-way feedback'], tips: 'Whose expertise is required before work can be approved?' },
      { id: 'Informed', name: 'Informed (I - One-Way Updates)', details: ['Leadership & adjacent stakeholders', 'Milestone and launch notifications', 'No approval bottleneck'], tips: 'Who simply needs status visibility without slowing execution?' }
    ],
    interactiveHints: 'Audit every initiative to ensure zero deliverables have multiple A\'s or missing R\'s.'
  },
  {
    id: 'scenario-planning',
    name: 'Scenario Planning',
    description: 'Maps four plausible future worlds across two critical macro uncertainties to stress-test strategic resilience.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'Uncertainty A: Constrained / Low', high: 'Uncertainty A: Accelerated / High' },
      y: { low: 'Uncertainty B: Fragmented / Volatile', high: 'Uncertainty B: Integrated / Stable' }
    },
    sections: [
      { id: 'Scenario1', name: 'Scenario 1 (High B / Low A)', details: ['Core macro narrative & early signals', 'Strategic winners and losers', 'No-regret moves & hedges'], tips: 'What early indicators would tell you this future is unfolding?' },
      { id: 'Scenario2', name: 'Scenario 2 (High B / High A)', details: ['Best-case or high-velocity environment', 'Capital & talent scaling bets', 'Competitive moat requirements'], tips: 'How would you capture upside quickly if both forces align favorably?' },
      { id: 'Scenario3', name: 'Scenario 3 (Low B / Low A)', details: ['Defensive or stagflationary headwinds', 'Cash preservation & cost flexibility', 'Contingency triggers'], tips: 'Does your balance sheet and cost structure survive this downside world?' },
      { id: 'Scenario4', name: 'Scenario 4 (Low B / High A)', details: ['Disruptive, fragmented growth world', 'Modular partnerships & rapid pivots', 'Regulatory or regional arbitrage'], tips: 'Which capabilities must stay modular to thrive amid fragmentation?' }
    ],
    interactiveHints: 'Compare sticky notes across all four quadrants to find "no-regret" moves that pay off in every scenario.'
  },
  {
    id: 'theory-of-constraints',
    name: 'Theory of Constraints (TOC)',
    description: 'Goldratt\'s five focusing steps to maximize system throughput by systematically finding and unlocking the primary bottleneck.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'Identify', name: '1. Identify the Constraint', details: ['Locate the single slowest step / queue buildup', 'Measure WIP pile-ups and cycle delays', 'Distinguish root bottleneck from symptoms'], tips: 'Where does work consistently pile up waiting for a single resource?' },
      { id: 'Exploit', name: '2. Exploit the Constraint', details: ['Keep bottleneck 100% utilized on high-value work', 'Eliminate idle time, breaks, and defects feeding it', 'Offload non-essential tasks'], tips: 'How can you squeeze maximum output from the constraint without buying new capacity?' },
      { id: 'Subordinate', name: '3. Subordinate Everything Else', details: ['Pace upstream steps to the constraint\'s drumbeat', 'Prevent overproduction and WIP bloat', 'Align metrics to system throughput, not local utilization'], tips: 'Are upstream teams flooding the bottleneck with excess inventory?' },
      { id: 'Elevate', name: '4. Elevate the Constraint', details: ['Add shifts, automation, or parallel capacity', 'Outsource overflow or upgrade tooling', 'Invest capex only where needed'], tips: 'If the bottleneck still limits demand after exploiting, what investment breaks it?' },
      { id: 'Repeat', name: '5. Prevent Inertia & Repeat', details: ['Watch for the constraint shifting elsewhere', 'Update policies built around old limits', 'Restart at Step 1'], tips: 'Once this bottleneck is broken, where did the new constraint move?' }
    ],
    interactiveHints: 'Highlight the single bottleneck first—optimizing non-bottleneck steps wastes effort and creates WIP.'
  },
  {
    id: 'total-quality-management',
    name: 'Total Quality Management (TQM)',
    description: 'Organization-wide quality pyramid placing Customer Focus at the peak, supported by Process Management and Continuous Learning.',
    category: 'Operations & Supply Chain',
    layout: 'pyramid',
    sections: [
      { id: 'CustomerFocus', name: 'Customer Focus (Peak)', details: ['Customer-defined quality standards', 'Voice of Customer (VoC) feedback loops', 'Zero-defect delivery mindset'], tips: 'How do customers experience and define quality in their own words?' },
      { id: 'ProcessManagement', name: 'Process Management & Fact-Based Control', details: ['Statistical process control (SPC)', 'Standardized repeatable workflows', 'Root-cause defect prevention'], tips: 'Where can process variation be measured and tightened upstream?' },
      { id: 'ContinuousLearning', name: 'Total Employee Involvement & Continuous Learning', details: ['Quality circles & kaizen empowerment', 'Cross-functional training & coaching', 'Blameless error reporting'], tips: 'Is every team member trained and trusted to stop the line when quality slips?' }
    ],
    interactiveHints: 'Connect frontline learning habits at the base directly to measurable defect reductions for customers.'
  },
  {
    id: 'vrio-framework',
    name: 'VRIO Framework',
    description: 'Evaluates internal resources and capabilities across Value, Rarity, Inimitability, and Organization to uncover durable competitive advantage.',
    category: 'Strategy & Innovation',
    layout: 'columns',
    sections: [
      { id: 'Value', name: 'V: Valuable?', details: ['Exploits market opportunities', 'Neutralizes external threats', 'Lowers cost or boosts willingness to pay'], tips: 'Does this resource actually create measurable customer value or cost savings?' },
      { id: 'Rarity', name: 'R: Rare?', details: ['Controlled by very few competitors', 'Scarce talent, data, or IP', 'Avoids mere competitive parity'], tips: 'How many rivals possess or can easily buy this exact capability?' },
      { id: 'Imitability', name: 'I: Costly to Imitate?', details: ['Historical path dependence & brand trust', 'Social complexity & causal ambiguity', 'Patents, scale, or network effects'], tips: 'What would it cost a well-funded competitor in time and money to replicate this?' },
      { id: 'Organization', name: 'O: Organized to Capture?', details: ['Incentives, structure, and workflows', 'Governance and management systems', 'Commercialization execution'], tips: 'Is your organization structured to actually monetize and protect this advantage?' }
    ],
    interactiveHints: 'Pass each candidate asset left-to-right across V-R-I-O; only assets clearing all four yield sustained advantage.'
  },
  {
    id: 'value-stream-mapping',
    name: 'Value Stream Mapping (VSM)',
    description: 'Lean process map tracing material and information flows from supplier to customer to expose non-value-added wait time and waste.',
    category: 'Operations & Supply Chain',
    layout: 'staircase',
    sections: [
      { id: 'CustomerDemand', name: 'Customer Demand & Takt', details: ['Order cadence and volume', 'Takt time requirement', 'Service-level expectations'], tips: 'What is the true pace of customer pull (takt time)?' },
      { id: 'SuppliersInputs', name: 'Suppliers & Inbound Inputs', details: ['Raw materials or upstream data feeds', 'Delivery frequency and batch sizes', 'Supplier lead times'], tips: 'How do large upstream batch deliveries inflate downstream inventory?' },
      { id: 'ProcessSteps', name: 'Core Value-Adding Steps', details: ['Sequential transformation stations', 'Operators and equipment per step', 'First-pass yield / rework rate'], tips: 'Which steps actually transform value the customer is willing to pay for?' },
      { id: 'CycleMetrics', name: 'Process Data Blocks (C/T & C/O)', details: ['Cycle Time (C/T) per unit', 'Changeover Time (C/O) & uptime', 'Batch size and scrap %'], tips: 'Where do long changeovers or rework loops destroy effective capacity?' },
      { id: 'WaitBuffers', name: 'Inventory & Wait Queues', details: ['WIP stock between stations', 'Queue wait time vs touch time', 'Information handoff delays'], tips: 'What percentage of total lead time is pure waiting between steps?' },
      { id: 'InformationFlow', name: 'Information & Control Flow', details: ['Forecasting, MRP, or Kanban signals', 'Manual spreadsheets vs automated triggers', 'Schedule overrides'], tips: 'Are production schedules pushed from forecasts or pulled from downstream consumption?' },
      { id: 'CustomerDelivery', name: 'Fulfillment & Future-State Kaizen', details: ['Shipping & final customer handoff', 'Total Lead Time vs Value-Added Time', 'Target kaizen bursts'], tips: 'Which single kaizen burst removes the largest chunk of non-value-added lead time?' }
    ],
    interactiveHints: 'Contrast Value-Added Time against Total Lead Time to spotlight the biggest queue-reduction opportunities.'
  },
  {
    id: 'ge-mckinsey-9box',
    name: 'GE-McKinsey 9-Box Matrix',
    description: 'Portfolio allocation 3x3 grid evaluating business units on Industry Attractiveness vs Competitive Business Unit Strength.',
    category: 'Strategy & Innovation',
    layout: 'matrix',
    matrixLabels: {
      x: { low: 'Strong Business Strength', high: 'Weak Business Strength' },
      y: { low: 'Low Industry Attractiveness', high: 'High Industry Attractiveness' }
    },
    sections: [
      { id: 'HighHigh', name: 'High Attractiveness / Strong Unit (Invest & Grow)', details: ['Top capital & talent priority', 'Scale aggressively for market leadership', 'Defend core moats'], tips: 'Are you funding your strongest units aggressively enough to widen the lead?' },
      { id: 'HighMed', name: 'High Attractiveness / Medium Unit (Invest & Grow)', details: ['Targeted capex to close capability gaps', 'Build differentiation in key niches', 'Selective M&A'], tips: 'What capability upgrade moves this unit into the top-left leader box?' },
      { id: 'HighLow', name: 'High Attractiveness / Weak Unit (Selectivity / Earn)', details: ['Double down on a narrow niche OR exit', 'Avoid spreading capital thin', 'Partner to fix scale gaps'], tips: 'Can this unit realistically catch up, or should you sell into strong market demand?' },
      { id: 'MedHigh', name: 'Medium Attractiveness / Strong Unit (Invest & Grow)', details: ['Protect share and optimize margins', 'Selective growth investments', 'Cash-generative stronghold'], tips: 'How do you sustain high returns without over-investing in a maturing sector?' },
      { id: 'MedMed', name: 'Medium Attractiveness / Medium Unit (Selectivity / Earn)', details: ['Maintain only if ROI exceeds hurdle', 'Focus on operational efficiency', 'Look for consolidation plays'], tips: 'What specific turnaround milestone justifies keeping capital here?' },
      { id: 'MedLow', name: 'Medium Attractiveness / Weak Unit (Harvest / Divest)', details: ['Freeze expansion capex', 'Maximize near-term cash extraction', 'Evaluate divestiture'], tips: 'Is management attention here starving higher-potential growth units?' },
      { id: 'LowHigh', name: 'Low Attractiveness / Strong Unit (Selectivity / Cash Cow)', details: ['Harvest strong cash flows', 'Prune low-margin SKUs', 'Fund High-Attractiveness bets'], tips: 'How much free cash flow can this unit safely generate for growth bets?' },
      { id: 'LowMed', name: 'Low Attractiveness / Medium Unit (Harvest / Divest)', details: ['Minimize fixed costs', 'No new discretionary capex', 'Planned wind-down or sale'], tips: 'What is the cleanest exit or cash-harvest plan over 12–24 months?' },
      { id: 'LowLow', name: 'Low Attractiveness / Weak Unit (Divest / Exit)', details: ['Divest, spin off, or liquidate', 'Reallocate capital and leadership', 'Stop ongoing cash bleed'], tips: 'What is holding the leadership team back from exiting this unit decisively?' }
    ],
    interactiveHints: 'Plot each business unit into its 3×3 cell to guide capital allocation: Grow, Hold/Selectivity, or Harvest/Divest.'
  },
  {
    id: 'greiners-growth-model',
    name: 'Greiner\'s Growth Model',
    description: 'Charts six predictable phases of organizational growth, each culminating in a distinct management crisis that unlocks the next stage.',
    category: 'Strategy & Innovation',
    layout: 'staircase',
    sections: [
      { id: 'Creativity', name: 'Phase 1: Growth through Creativity ➜ Crisis of Leadership', details: ['Founder-led informal culture', 'Product-market hustle & long hours', 'Crisis: Founders overwhelmed by management'], tips: 'Are informal founder habits breaking down as headcount scales?' },
      { id: 'Direction', name: 'Phase 2: Growth through Direction ➜ Crisis of Autonomy', details: ['Functional org chart & budgets', 'Professionalized processes & accounting', 'Crisis: Frontline stifled by hierarchy'], tips: 'Do middle managers feel powerless to act without top-down sign-off?' },
      { id: 'Delegation', name: 'Phase 3: Growth through Delegation ➜ Crisis of Control', details: ['Decentralized P&L / business units', 'Incentive bonuses & local ownership', 'Crisis: Silos and loss of executive control'], tips: 'Are autonomous units drifting away from unified corporate priorities?' },
      { id: 'Coordination', name: 'Phase 4: Growth through Coordination ➜ Crisis of Red Tape', details: ['Formal planning cycles & shared services', 'Cross-unit product groups & audits', 'Crisis: Bureaucracy slows innovation'], tips: 'Is reporting overhead taking more time than serving customers?' },
      { id: 'Collaboration', name: 'Phase 5: Growth through Collaboration ➜ Crisis of Internal Growth', details: ['Cross-functional matrix teams & agile', 'Real-time shared systems & trust', 'Crisis: Saturation and innovation fatigue'], tips: 'How do you keep cross-functional teams energized without burning out?' },
      { id: 'Alliances', name: 'Phase 6: Growth through Alliances', details: ['Ecosystem partnerships & M&A', 'Outsourcing & joint ventures', 'Platform & network expansion'], tips: 'Which strategic partnerships can unlock growth beyond internal organic limits?' }
    ],
    interactiveHints: 'Identify your current growth phase and prepare the structural cure before the corresponding crisis hits.'
  },
  {
    id: 'kays-distinctive-capabilities',
    name: 'Kay\'s Distinctive Capabilities',
    description: 'Explains sustainable corporate advantage through three primary sources: Architecture, Reputation, and Innovation.',
    category: 'Strategy & Innovation',
    layout: 'circles',
    sections: [
      { id: 'Architecture', name: 'Architecture (Relational Network)', details: ['Internal & external contract networks', 'Institutional knowledge sharing', 'Long-term supplier & partner trust'], tips: 'What unique network of internal and external relationships is hard to copy?' },
      { id: 'Reputation', name: 'Reputation (Market Signal)', details: ['Consistent historical quality & trust', 'Brand credibility in high-risk purchases', 'Word-of-mouth moat'], tips: 'Where does your reputation reduce buyer risk more effectively than price cuts?' },
      { id: 'Innovation', name: 'Innovation (Appropriable Edge)', details: ['Proprietary R&D and patent protection', 'Speed of commercialization', 'Complementary assets to capture returns'], tips: 'How do you ensure rivals cannot imitate and capture the profits of your innovations?' }
    ],
    interactiveHints: 'Map sticky notes across the three capabilities and focus on combining them with strategic assets.'
  },
  {
    id: 'strategic-pyramid',
    name: 'Strategic Pyramid',
    description: 'Hierarchical cascade aligning top-level Vision and Mission through Objectives and Strategies down to frontline Action Plans.',
    category: 'Strategy & Innovation',
    layout: 'pyramid',
    sections: [
      { id: 'Vision', name: 'Vision (Ultimate Aspiration)', details: ['Long-term 5–10 year north star', 'Future world you aim to create', 'Inspirational directional anchor'], tips: 'Does everyone know what success looks like in 5–10 years?' },
      { id: 'Mission', name: 'Mission (Core Purpose)', details: ['Who we serve and what we deliver', 'Distinctive reason for existing today', 'Core value boundary'], tips: 'Can a new hire recite your core purpose and target customer in one sentence?' },
      { id: 'Objectives', name: 'Strategic Objectives (Measurable Goals)', details: ['Annual & multi-year quantitative targets', 'Revenue, margin, NPS, or market share', 'Clear success thresholds'], tips: 'Are objectives concrete, time-bound, and free of vague buzzwords?' },
      { id: 'Strategies', name: 'Strategies (Strategic Choices)', details: ['Where to play and how to win', 'Key capability bets & trade-offs', 'Resource prioritization'], tips: 'Do these strategies explicitly clarify what trade-offs you are making?' },
      { id: 'ActionPlans', name: 'Action Plans & Tactics (Base Execution)', details: ['Quarterly OKRs, projects, and sprints', 'Named owners, budgets, and due dates', 'Weekly execution tracking'], tips: 'Does every frontline project trace cleanly up to a strategic objective?' }
    ],
    interactiveHints: 'Read top-down to cascade intent and bottom-up to verify every action plan serves the Vision.'
  },
  {
    id: 'decision-matrix-analysis',
    name: 'Decision Matrix Analysis',
    description: 'Structured weighted scoring framework comparing competing options objectively against prioritized must-have and want criteria.',
    category: 'Problem Solving & Decision Making',
    layout: 'grid',
    sections: [
      { id: 'Options', name: 'Candidate Options', details: ['List 3–6 mutually viable alternatives', 'Include "Status Quo / Do Nothing" baseline', 'Ensure apples-to-apples scope'], tips: 'Have you included at least one creative or status-quo alternative?' },
      { id: 'CriteriaWeights', name: 'Weighted Decision Criteria', details: ['Cost, ROI, time-to-value, risk, fit', 'Assign weights (e.g. 1–5 importance)', 'Separate mandatory constraints from wants'], tips: 'Are weights agreed upon before scoring options to prevent bias?' },
      { id: 'ScoresTradeoffs', name: 'Option Scoring & Trade-offs', details: ['Score each option 1–5 per criterion', 'Multiply score × weight', 'Document key assumptions per score'], tips: 'Which single high-weight criterion separates the top two options?' },
      { id: 'Recommendation', name: 'Final Ranking & Sensitivity Check', details: ['Sum weighted scores & rank options', 'Test if ±1 weight changes winner', 'Commit decision & mitigation plan'], tips: 'Does the winning score still feel right under a sanity check of hidden risks?' }
    ],
    interactiveHints: 'Agree on criteria weights first before scoring options so confirmation bias doesn\'t skew the math.'
  },
  {
    id: 'mece-principle',
    name: 'MECE Principle',
    description: 'McKinsey problem-structuring rule ensuring categories are Mutually Exclusive (zero overlap) and Collectively Exhaustive (zero gaps).',
    category: 'Problem Solving & Decision Making',
    layout: 't-chart',
    sections: [
      { id: 'MutuallyExclusive', name: 'Mutually Exclusive (Zero Overlaps)', details: ['Each item fits in strictly ONE bucket', 'Eliminate double-counting or ambiguity', 'Crisp category definitions (e.g. Region, Segment, Formula)'], tips: 'Can any sticky note plausibly sit in two buckets at once? If so, redefine boundaries.' },
      { id: 'CollectivelyExhaustive', name: 'Collectively Exhaustive (Zero Blind Spots)', details: ['All possible options/drivers covered', 'Sum of parts equals 100% of problem space', 'Include explicit "Other" check only if bounded'], tips: 'Is there any driver or segment missing from the total universe?' }
    ],
    interactiveHints: 'Test your issue tree or category breakdown against both sides before launching deep analysis.'
  },
  {
    id: 'mind-mapping',
    name: 'Mind Mapping',
    description: 'Radiant non-linear brainstorming canvas branching outward from a central concept into primary themes, sub-ideas, and links.',
    category: 'Problem Solving & Decision Making',
    layout: 'radial',
    sections: [
      { id: 'CentralTopic', name: 'Central Concept / Challenge', details: ['Single crisp core problem or theme', 'Clear framing question', 'Visual anchor for ideation'], tips: 'Is your central prompt open-ended enough to spark diverse angles?' },
      { id: 'PrimaryBranches', name: 'Primary Branches (Core Themes)', details: ['5–7 high-level radiating categories', 'People, Tech, Market, Cost, Experience', 'Distinct color or domain lenses'], tips: 'Do your primary branches cover distinct angles of the central topic?' },
      { id: 'SubBranches', name: 'Secondary Sub-Ideas (Twigs)', details: ['Rapid divergent associations', 'Specific tactics, analogies, and examples', 'Single-keyword triggers'], tips: 'Keep pushing each branch 2–3 levels deeper for non-obvious ideas.' },
      { id: 'CrossLinks', name: 'Cross-Connections & Patterns', details: ['Unexpected links between distant branches', 'Shared root causes or synergies', 'Clustered insights'], tips: 'Which two separate branches combine into an original breakthrough?' },
      { id: 'NextSteps', name: 'Synthesis & Action Seeds', details: ['Highlight top 3 promising branches', 'Convert sparks into testable experiments', 'Assign follow-up owners'], tips: 'Which ideas deserve immediate prototyping or deeper research?' }
    ],
    interactiveHints: 'Brainstorm rapidly in Primary and Sub-Ideas first, then synthesize surprises in Cross-Connections.'
  },
  {
    id: 'fault-tree-analysis',
    name: 'Fault Tree Analysis (FTA)',
    description: 'Top-down deductive reliability analysis tracing a catastrophic Top Event down to basic root component failures using AND/OR logic.',
    category: 'Problem Solving & Decision Making',
    layout: 'tree',
    sections: [
      { id: 'TopEvent', name: 'Top Event (Undesired Failure)', details: ['Precise system failure definition', 'Severity & safety/SLA impact', 'Scope boundary'], tips: 'What exact single undesired system failure are you tracing backward?' },
      { id: 'IntermediateFaults', name: 'Intermediate Sub-System Faults', details: ['Contributing module or process breakdowns', 'Dependency chains', 'Human vs hardware fault paths'], tips: 'Which immediate sub-system failures directly trigger the Top Event?' },
      { id: 'LogicGates', name: 'Boolean Logic Gates (AND / OR)', details: ['AND gate: Redundant controls must ALL fail', 'OR gate: Single point of failure triggers fault', 'Single-point-of-failure flags'], tips: 'Where does an OR gate expose a dangerous single point of failure?' },
      { id: 'BasicRootEvents', name: 'Basic Root Causes', details: ['Component wear, bug, or misconfiguration', 'Environmental or operator error triggers', 'Failure probability estimates'], tips: 'Have you drilled down far enough to reach actionable atomic root events?' },
      { id: 'Safeguards', name: 'Redundancy & Cut-Set Mitigations', details: ['Convert OR gates into AND gates via redundancy', 'Minimal cut-set elimination', 'Monitoring & fail-safe interlocks'], tips: 'Which minimal cut set (shortest path to failure) is cheapest to harden first?' }
    ],
    interactiveHints: 'Flag OR-gate paths with single points of failure first, then design redundant safeguards in the final section.'
  },
  {
    id: 'open-innovation',
    name: 'Open Innovation',
    description: 'Porous innovation funnel illustrating external ideas flowing inward (inbound) and internal IP spinning outward (outbound) across R&D.',
    category: 'Strategy & Innovation',
    layout: 'funnel',
    sections: [
      { id: 'InboundIdeas', name: 'Inbound Openness (Outside-In Exploration)', details: ['University labs, startups, and crowdsourcing', 'In-licensing IP and API ecosystems', 'Customer co-innovation & hackathons'], tips: 'Where can external breakthroughs accelerate your R&D faster than building from scratch?' },
      { id: 'InternalDevelopment', name: 'Internal R&D & Boundary Filtering', details: ['Combine external & internal IP', 'Rapid prototyping and pilot validation', 'Strategic fit & IP protection checks'], tips: 'Which external technologies integrate cleanly with your core platform?' },
      { id: 'OutboundCommercialization', name: 'Outbound Pathways (Inside-Out Spin-Outs)', details: ['Out-licensing unused patents/tech', 'Joint ventures and corporate spin-offs', 'Secondary market monetization'], tips: 'What shelved internal R&D could create real value in someone else\'s market?' }
    ],
    interactiveHints: 'Balance sticky notes between bringing external discoveries in and monetizing non-core internal IP out.'
  },
  {
    id: 'belbin-team-roles',
    name: 'Belbin Team Roles',
    description: 'Nine complementary behavioral team roles grouped across Thinking, Action, and People orientations for balanced team design.',
    category: 'Leadership & Teams',
    layout: 'radial',
    sections: [
      { id: 'Plant', name: 'Plant (Thinking)', details: ['Creative, unorthodox problem-solver', 'Generates original ideas', 'Needs space from rigid routine'], tips: 'Who brings fresh breakthrough thinking when the team hits a wall?' },
      { id: 'MonitorEvaluator', name: 'Monitor Evaluator (Thinking)', details: ['Objective, strategic analyzer', 'Spots flaws and weighs options calmly', 'Prevents groupthink hype'], tips: 'Who asks the tough, sober analytical questions before committing?' },
      { id: 'Specialist', name: 'Specialist (Thinking)', details: ['Deep domain or technical expertise', 'Sets craft & quality benchmarks', 'Single-subject mastery'], tips: 'Which critical technical gap requires dedicated deep expertise?' },
      { id: 'Shaper', name: 'Shaper (Action)', details: ['High-drive challenger who pushes momentum', 'Thrives under pressure', 'Cuts through complacency'], tips: 'Who keeps urgency high when deadlines or obstacles threaten progress?' },
      { id: 'Implementer', name: 'Implementer (Action)', details: ['Turns concepts into practical plans', 'Disciplined, reliable execution', 'Process and checklist builder'], tips: 'Who reliably translates brainstorms into structured project steps?' },
      { id: 'CompleterFinisher', name: 'Completer Finisher (Action)', details: ['Detail-obsessed quality guardian', 'Catches errors before launch', 'Polishes final deliverables'], tips: 'Who performs the rigorous final quality check before shipping?' },
      { id: 'Coordinator', name: 'Coordinator (People)', details: ['Clarifies goals and delegates fairly', 'Pulls diverse strengths together', 'Calm facilitation'], tips: 'Who keeps the whole team aligned on shared priorities?' },
      { id: 'Teamworker', name: 'Teamworker (People)', details: ['Diplomatic, perceptive listener', 'Defuses friction and builds harmony', 'Supports struggling teammates'], tips: 'Who maintains psychological safety and smooth collaboration under stress?' },
      { id: 'ResourceInvestigator', name: 'Resource Investigator (People)', details: ['Outgoing networker and explorer', 'Brings in external leads & opportunities', 'Enthusiastic early-stage momentum'], tips: 'Who connects the team to external partners, customers, and market intel?' }
    ],
    interactiveHints: 'Map your current team members across all 9 roles to spot missing capabilities (e.g., all Plants, no Completer Finisher).'
  },
  {
    id: 'scrumban',
    name: 'Scrumban',
    description: 'Hybrid Agile workflow combining Scrum\'s prioritized backlog and planning cadence with Kanban\'s continuous flow and WIP limits.',
    category: 'Operations & Supply Chain',
    layout: 'kanban',
    sections: [
      { id: 'Backlog', name: 'Prioritized Backlog (Scrum Pull Queue)', details: ['Refined user stories & bugs', 'Ordered by business value', 'Trigger-based replenishment'], tips: 'Are top backlog items small and ready to pull the moment WIP drops?' },
      { id: 'ToDoReady', name: 'Ready / To Do (Replenish Threshold)', details: ['Bucket sized to pull trigger', 'Acceptance criteria verified', 'Zero hidden blockers'], tips: 'What minimum queue count triggers a quick just-in-time planning huddle?' },
      { id: 'InProgressWIP', name: 'In Progress (Strict WIP Limit)', details: ['Enforced max concurrent cards (e.g. WIP ≤ 3)', 'Stop starting, start finishing', 'Swarm blocked items immediately'], tips: 'If WIP hits its ceiling, which card can the team swarm to finish before pulling new work?' },
      { id: 'DoneRetro', name: 'Done & Continuous Retro', details: ['Shipped & verified increments', 'Lead time & cycle time tracking', 'Kaizen process retrospectives'], tips: 'What is your average cycle time from Ready to Done, and where did cards stall?' }
    ],
    interactiveHints: 'Keep the In Progress WIP count tight and trigger backlog refinement whenever Ready drops low.'
  },
  {
    id: 'bullwhip-effect',
    name: 'Bullwhip Effect Diagram',
    description: 'Traces how small fluctuations in retail consumer demand amplify progressively into severe inventory swings up the supply chain.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'RetailDemand', name: '1. Retail & Consumer Demand', details: ['Actual end-customer POS variance', 'Promotional spikes & seasonality', 'Baseline demand signal'], tips: 'What is the true variance in end-consumer purchases before order batching?' },
      { id: 'WholesalerOrders', name: '2. Wholesaler / Distributor Orders', details: ['Order batching to hit freight minimums', 'Safety-stock overreaction', 'Forecast-driven ordering'], tips: 'How much are bulk order schedules exaggerating small retail shifts?' },
      { id: 'ManufacturerProduction', name: '3. Manufacturer Production Swings', details: ['Capacity overtime vs idle swings', 'Long changeovers & rationing gaming', 'Lead-time lag amplification'], tips: 'Are shortage fears causing distributors to inflate orders (rationing gaming)?' },
      { id: 'SupplierStabilization', name: '4. Upstream Suppliers & Countermeasures', details: ['Raw material bullwhip shock', 'Countermeasure: Share live POS data', 'Countermeasure: Smaller frequent replenishment'], tips: 'How can real-time POS sharing and EDLP flatten upstream demand distortion?' }
    ],
    interactiveHints: 'Pair each amplification driver in Stages 1–3 with a data-sharing or batch-reduction fix in Stage 4.'
  },
  {
    id: 'jit-flowchart',
    name: 'Just-in-Time (JIT) Flowchart',
    description: 'Pull-based lean production flow where downstream customer consumption triggers upstream replenishment only as needed.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'CustomerPull', name: '1. Downstream Customer Pull Signal', details: ['Actual order / consumption trigger', 'Zero speculative overproduction', 'Takt-paced demand'], tips: 'Does production start strictly from verified downstream consumption?' },
      { id: 'KanbanTrigger', name: '2. Kanban Signal & Supermarket', details: ['Visual card / e-kanban replenishment', 'Bounded buffer sizes', 'Immediate defect stop-the-line (Andon)'], tips: 'Are kanban signals clear, visible, and capped to prevent silent inventory hoarding?' },
      { id: 'LeveledProduction', name: '3. Leveled Flow & Quick Changeover', details: ['Heijunka (level scheduling)', 'SMED rapid die/tool changeovers', 'One-piece or small-lot flow'], tips: 'Which long setup/changeover time forces large batches today?' },
      { id: 'SupplierSync', name: '4. Synchronized Supplier Delivery', details: ['Frequent small-lot milk runs', '100% incoming quality at source', 'Tight vendor transparency'], tips: 'Do suppliers have reliable visibility and contingency plans for zero-buffer flow?' }
    ],
    interactiveHints: 'Follow demand backward from Customer Pull to Supplier Sync, flagging any step still operating on batch push.'
  },
  {
    id: 'cpfr',
    name: 'CPFR (Collaborative Planning)',
    description: 'Supply-chain partnership cycle uniting retailers and suppliers across Strategy & Planning, Demand Management, Execution, and Analysis.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'StrategyPlanning', name: 'Strategy & Joint Planning', details: ['Joint business plan & SLA rules', 'Shared KPIs and promo calendar', 'Data-sharing governance'], tips: 'Have both buyer and supplier agreed on shared service-level and inventory targets?' },
      { id: 'DemandSupplyMgmt', name: 'Demand & Supply Forecasting', details: ['Shared POS & promotional forecasts', 'Consensus order replenishment plan', 'Resolve forecast exceptions early'], tips: 'Where do buyer and supplier forecasts diverge, and why?' },
      { id: 'Execution', name: 'Order Generation & Fulfillment', details: ['Convert consensus forecast to orders', 'Shipments, receiving, and shelf stock', 'Real-time exception alerts'], tips: 'Are fulfillment exceptions surfaced early enough to reroute stock?' },
      { id: 'Analysis', name: 'Performance Analysis & Adjustment', details: ['Forecast accuracy & fill-rate review', 'Out-of-stock root cause audit', 'Feed lessons into next cycle'], tips: 'Which forecast bias or promo miss repeated this cycle?' }
    ],
    interactiveHints: 'Use each quadrant to document shared buyer-supplier commitments and exception thresholds.'
  },
  {
    id: 'crystal-methods',
    name: 'Crystal Methods',
    description: 'Alistair Cockburn\'s family of people-centric Agile methodologies scaled by team size and system criticality from Crystal Clear to Diamond.',
    category: 'Operations & Supply Chain',
    layout: 'grid',
    sections: [
      { id: 'CrystalClear', name: 'Crystal Clear (1–6 People / Comfort)', details: ['Frequent delivery & reflective improvement', 'Osmotic co-located communication', 'Minimal ceremony, high trust'], tips: 'Can a small co-located squad ship weekly with lightweight daily check-ins?' },
      { id: 'CrystalYellow', name: 'Crystal Yellow (7–20 People / Discretionary)', details: ['Automated testing & clear code ownership', 'Cross-role feedback loops', 'Lightweight milestone tracking'], tips: 'What minimal automated tests prevent regressions as the team grows past 6?' },
      { id: 'CrystalOrange', name: 'Crystal Orange (21–40 People / Essential)', details: ['Multi-team release coordination', 'Incremental architecture & role clarity', 'Regular user demos'], tips: 'How do multiple feature sub-teams stay aligned without heavy bureaucracy?' },
      { id: 'CrystalRed', name: 'Crystal Red (41–80 People / Essential+)', details: ['Formal sub-team syncs & interfaces', 'Dedicated system integration checkpoints', 'Structured risk reviews'], tips: 'Which cross-team API or dependency boundaries require explicit integration owners?' },
      { id: 'CrystalMaroon', name: 'Crystal Maroon (81–200 People)', details: ['Program-level governance & release trains', 'Tailored compliance documentation', 'Shared platform standards'], tips: 'Where does compliance or scale require formal documentation without slowing squads?' },
      { id: 'CrystalDiamond', name: 'Crystal Diamond / Sapphire (Critical)', details: ['Life-critical or mission-critical rigor', 'Formal verification & audit trails', 'Zero-defect validation gates'], tips: 'What irreversible safety or financial failure demands formal verification gates?' }
    ],
    interactiveHints: 'Select the Crystal tier matching your headcount and failure criticality rather than over-processing small teams.'
  },
  {
    id: 'dsdm',
    name: 'Dynamic Systems Development Method (DSDM)',
    description: 'Agile delivery cycle fixing time, cost, and quality while flexing scope via MoSCoW prioritization across four iterative phases.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'Feasibility', name: 'Feasibility & Foundations', details: ['Confirm business case & fixed deadline', 'High-level architecture & MoSCoW baseline', 'Empower core team roles'], tips: 'Is the non-negotiable deadline and budget realistic for the Must-Have scope?' },
      { id: 'EvolutionaryDev', name: 'Evolutionary Development (Timeboxes)', details: ['Iterative build in fixed timeboxes', 'Flex Could/Should scope to hit dates', 'Daily standups & active user input'], tips: 'Which Could-Have features can be safely dropped if timebox velocity slips?' },
      { id: 'DesignBuild', name: 'Design, Build & Integrated Testing', details: ['Continuous quality & never compromise testing', 'Incremental prototypes reviewed by users', 'Traceability to business goals'], tips: 'Are users testing working increments inside every timebox rather than at the end?' },
      { id: 'Implementation', name: 'Deployment & Post-Project Review', details: ['Production rollout & user training', 'Benefits realization audit', 'Feed learnings into next increment'], tips: 'Did the deployed increment actually deliver the promised business benefit?' }
    ],
    interactiveHints: 'Protect deadlines and quality rigorously by flexing lower-priority scope inside Evolutionary Development.'
  },
  {
    id: 'fdd',
    name: 'Feature-Driven Development (FDD)',
    description: 'Client-valued software engineering workflow progressing through five disciplined steps from overall domain modeling to feature builds.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'DevelopModel', name: '1. Develop Overall Model', details: ['High-level domain object model', 'Cross-team walkthroughs & shared vocabulary', 'Architectural skeleton'], tips: 'Do domain experts and engineers share one unified mental model of the system?' },
      { id: 'BuildFeatureList', name: '2. Build Feature List', details: ['Break domain into client-valued features', 'Action-Result-Object naming (<2 weeks each)', 'Group into major feature sets'], tips: 'Is every feature small enough to design and build inside two weeks?' },
      { id: 'PlanByFeature', name: '3. Plan by Feature', details: ['Sequence by dependency, risk, and value', 'Assign Chief Programmers & class owners', 'Set target completion dates'], tips: 'Which high-risk foundational features must be sequenced first?' },
      { id: 'DesignByFeature', name: '4. Design by Feature', details: ['Small feature-team sequence diagrams', 'Design inspection before coding', 'Interface & contract clarity'], tips: 'Have peer engineers reviewed the design for edge cases before coding starts?' },
      { id: 'BuildByFeature', name: '5. Build by Feature', details: ['Code, unit test, and code inspection', 'Promote to main build continuously', 'Track % feature completion'], tips: 'Does every completed feature pass both automated tests and peer code inspection?' }
    ],
    interactiveHints: 'Keep features granular (<2 weeks) and track objective progress across steps 4 and 5.'
  },
  {
    id: 'pert-chart',
    name: 'PERT Chart',
    description: 'Program Evaluation and Review Technique structuring uncertain project durations using Optimistic, Most Likely, and Pessimistic estimates.',
    category: 'Operations & Supply Chain',
    layout: 'linear',
    sections: [
      { id: 'MilestonesTasks', name: '1. Milestones & Network Tasks', details: ['Decompose project into discrete events', 'Map predecessor/successor dependencies', 'Identify parallel vs serial tracks'], tips: 'Which predecessor milestones block multiple downstream workstreams?' },
      { id: 'OptimisticTime', name: '2. Optimistic Estimate (O)', details: ['Best-case duration if everything goes smoothly', 'Zero unexpected blockers', 'Ideal resource availability'], tips: 'What is the fastest realistic completion time under ideal conditions?' },
      { id: 'MostLikelyTime', name: '3. Most Likely Estimate (M)', details: ['Normal realistic duration under standard friction', 'Historical team velocity benchmark', 'Typical review cycles'], tips: 'Based on past projects, how long does this task normally take?' },
      { id: 'PessimisticTime', name: '4. Pessimistic Estimate (P)', details: ['Worst-case duration excluding force majeure', 'Vendor delays, rework, and approvals', 'Uncertainty spread (P - O)'], tips: 'What realistic setbacks could stretch this task\'s timeline significantly?' },
      { id: 'ExpectedCriticalPath', name: '5. Expected Time (O+4M+P)/6 & Critical Path', details: ['Weighted expected duration per task', 'Highest-variance tasks needing buffers', 'Longest dependent chain = Critical Path'], tips: 'Which high-variance tasks sit directly on the Critical Path and need risk buffers?' }
    ],
    interactiveHints: 'Calculate Expected Time (O + 4M + P) / 6 on high-uncertainty tasks to protect your Critical Path schedule.'
  },
  {
    id: 'house-of-risk',
    name: 'House of Risk (HOR)',
    description: 'Two-phase supply chain risk framework combining FMEA and House of Quality to prioritize root Risk Agents and cost-effective mitigations.',
    category: 'Operations & Supply Chain',
    layout: 'hoq',
    sections: [
      { id: 'RiskEvents', name: 'Risk Events (What Goes Wrong & Severity)', details: ['Stockouts, port delays, supplier failure', 'Quality recalls & demand shocks', 'Severity rating (1–10 impact)'], tips: 'Which supply-chain disruptions carry the highest customer or revenue severity?' },
      { id: 'RiskAgents', name: 'Root Risk Agents (Causes & Occurrence)', details: ['Single-source dependency, poor forecasting', 'Manual handoffs, geopolitical exposure', 'Occurrence likelihood (1–10)'], tips: 'Which single root Risk Agent triggers multiple different Risk Events?' },
      { id: 'AggregatePotential', name: 'HOR Phase 1: Aggregate Risk Potential (ARP)', details: ['Correlation strength between Agent & Events', 'ARP = Occurrence × Σ(Severity × Correlation)', 'Pareto-rank top 20% Risk Agents'], tips: 'Which top 2–3 Risk Agents dominate your overall Aggregate Risk Potential?' },
      { id: 'PreventiveActions', name: 'HOR Phase 2: Preventive Mitigations', details: ['Dual-sourcing, safety buffers, vendor audits', 'Early-warning telemetry & contracts', 'Effectiveness-to-difficulty ratio'], tips: 'Which preventive action neutralizes the highest ARP score at the lowest cost?' },
      { id: 'ActionRoadmap', name: 'Implementation & Monitoring Plan', details: ['Sequence top-ratio mitigations first', 'Assign supply-chain owners & triggers', 'Re-score ARP quarterly'], tips: 'Have you scheduled owners and review dates for the top preventive actions?' }
    ],
    interactiveHints: 'Focus first on Risk Agents with high Aggregate Risk Potential (ARP), then pick mitigations with the best impact-to-effort ratio.'
  },
  {
    id: 'vmi',
    name: 'Vendor-Managed Inventory (VMI)',
    description: 'Collaborative replenishment loop where the buyer shares live inventory/sales data and the supplier manages stock replenishment.',
    category: 'Operations & Supply Chain',
    layout: 'cycle',
    sections: [
      { id: 'BuyerDataSharing', name: '1. Buyer Shares Live Inventory & POS Data', details: ['Daily stock-on-hand & sell-through feeds', 'Agreed min/max stock thresholds', 'Promo & seasonal event flags'], tips: 'Is the supplier receiving clean, automated daily consumption data rather than delayed orders?' },
      { id: 'SupplierForecasting', name: '2. Supplier Monitors & Plans Replenishment', details: ['Track inventory against min/max bands', 'Consolidate truckload / shipping efficiency', 'Prevent stockouts and excess buffer bloat'], tips: 'Do min/max SLA guardrails align supplier incentives with buyer shelf availability?' },
      { id: 'AutomatedReplenishment', name: '3. Automated Shipment & SLA Review', details: ['Supplier generates replenishment order', 'ASN visibility & automated invoicing', 'Joint fill-rate & turnover KPI review'], tips: 'Are stockout penalties and inventory-turn gains measured transparently by both parties?' }
    ],
    interactiveHints: 'Define exact data feeds, min/max guardrails, and joint KPIs across all three steps of the loop.'
  }
];

export const COLORS = [
  'bg-yellow-100',
  'bg-blue-100',
  'bg-green-100',
  'bg-pink-100',
  'bg-purple-100',
  'bg-orange-100'
];
