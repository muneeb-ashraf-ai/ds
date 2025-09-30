// Search index containing all pages and their content
const searchIndex = [
    // Mathematics
    { title: "Linear Algebra", url: "mathematics/linear_algebra.html", content: "vectors matrices eigenvalues linear transformations systems equations", category: "Mathematics" },
    { title: "Calculus", url: "mathematics/calculus.html", content: "derivatives integrals limits differential calculus integral calculus", category: "Mathematics" },
    { title: "Discrete Mathematics", url: "mathematics/discrete_math.html", content: "discrete structures logic proofs set theory combinatorics graph theory", category: "Mathematics" },
    { title: "Number Theory", url: "mathematics/number_theory.html", content: "integers prime numbers modular arithmetic cryptography", category: "Mathematics" },
    { title: "Abstract Algebra", url: "mathematics/abstract_algebra.html", content: "groups rings fields algebraic structures", category: "Mathematics" },
    { title: "Real Analysis", url: "mathematics/real_analysis.html", content: "real numbers sequences series continuity convergence", category: "Mathematics" },
    { title: "Complex Analysis", url: "mathematics/complex_analysis.html", content: "complex numbers analytic functions contour integration", category: "Mathematics" },
    { title: "Differential Equations", url: "mathematics/differential_equations.html", content: "ordinary differential equations partial differential equations", category: "Mathematics" },
    { title: "Topology", url: "mathematics/topology.html", content: "topological spaces continuity homeomorphisms", category: "Mathematics" },
    { title: "Geometry", url: "mathematics/geometry.html", content: "euclidean geometry non-euclidean geometry shapes angles", category: "Mathematics" },
    { title: "Graph Theory", url: "mathematics/graph_theory.html", content: "graphs vertices edges networks connectivity", category: "Mathematics" },
    { title: "Optimization", url: "mathematics/optimization.html", content: "linear programming nonlinear optimization convex optimization", category: "Mathematics" },
    { title: "Numerical Methods", url: "mathematics/numerical_methods.html", content: "numerical analysis computational mathematics algorithms", category: "Mathematics" },
    { title: "Set Theory", url: "mathematics/set_theory.html", content: "sets operations union intersection complement", category: "Mathematics" },
    { title: "Mathematical Logic", url: "mathematics/logic.html", content: "propositional logic predicate logic formal systems", category: "Mathematics" },
    { title: "Combinatorics", url: "mathematics/combinatorics.html", content: "permutations combinations counting principles", category: "Mathematics" },
    { title: "Game Theory", url: "mathematics/game_theory.html", content: "strategic games nash equilibrium decision theory", category: "Mathematics" },
    { title: "Fractals", url: "mathematics/fractals.html", content: "fractal geometry self-similarity mandelbrot set", category: "Mathematics" },
    { title: "Chaos Theory", url: "mathematics/chaos_theory.html", content: "dynamical systems butterfly effect nonlinear dynamics", category: "Mathematics" },
    { title: "Fourier Analysis", url: "mathematics/fourier_analysis.html", content: "fourier series fourier transform signal processing", category: "Mathematics" },

    // Statistics
    { title: "Probability", url: "statistics/probability.html", content: "probability theory random variables distributions", category: "Statistics" },
    { title: "Regression", url: "statistics/regression.html", content: "linear regression multiple regression logistic regression", category: "Statistics" },
    { title: "Descriptive Statistics", url: "statistics/descriptive_stats.html", content: "mean median mode standard deviation variance", category: "Statistics" },
    { title: "Inferential Statistics", url: "statistics/inferential_stats.html", content: "hypothesis testing confidence intervals statistical inference", category: "Statistics" },
    { title: "Hypothesis Testing", url: "statistics/hypothesis_testing.html", content: "null hypothesis alternative hypothesis p-values significance", category: "Statistics" },
    { title: "ANOVA", url: "statistics/anova.html", content: "analysis of variance between groups within groups", category: "Statistics" },
    { title: "Correlation Analysis", url: "statistics/correlation.html", content: "correlation coefficient pearson spearman relationship", category: "Statistics" },
    { title: "Time Series Analysis", url: "statistics/time_series.html", content: "time series forecasting trends seasonality", category: "Statistics" },
    { title: "Bayesian Statistics", url: "statistics/bayesian_stats.html", content: "bayes theorem prior posterior probability", category: "Statistics" },
    { title: "Non-parametric Statistics", url: "statistics/nonparametric_stats.html", content: "nonparametric tests mann-whitney wilcoxon", category: "Statistics" },
    { title: "Experimental Design", url: "statistics/experimental_design.html", content: "randomized experiments control groups factorial design", category: "Statistics" },
    { title: "Survival Analysis", url: "statistics/survival_analysis.html", content: "survival functions kaplan-meier cox regression", category: "Statistics" },
    { title: "Multivariate Analysis", url: "statistics/multivariate_analysis.html", content: "multivariate statistics principal component analysis", category: "Statistics" },
    { title: "Sampling Theory", url: "statistics/sampling_theory.html", content: "sampling methods random sampling stratified sampling", category: "Statistics" },
    { title: "Confidence Intervals", url: "statistics/confidence_intervals.html", content: "confidence intervals margin of error statistical precision", category: "Statistics" },
    { title: "Distribution Theory", url: "statistics/distribution_theory.html", content: "normal distribution binomial poisson distributions", category: "Statistics" },
    { title: "Monte Carlo Methods", url: "statistics/monte_carlo.html", content: "monte carlo simulation random sampling computational", category: "Statistics" },
    { title: "Statistical Modeling", url: "statistics/statistical_modeling.html", content: "statistical models regression analysis model selection", category: "Statistics" },
    { title: "Quality Control", url: "statistics/quality_control.html", content: "control charts statistical process control quality", category: "Statistics" },
    { title: "Statistical Data Mining", url: "statistics/data_mining_stats.html", content: "data mining statistical methods pattern recognition", category: "Statistics" },

    // Machine Learning & AI
    { title: "Basics", url: "machine_learning_ai/basics.html", content: "machine learning basics supervised unsupervised algorithms", category: "Machine Learning & AI" },
    { title: "Core Concepts", url: "machine_learning_ai/core_concepts.html", content: "feature selection model evaluation overfitting underfitting", category: "Machine Learning & AI" },
    { title: "Algorithms", url: "machine_learning_ai/algorithms.html", content: "classification regression clustering decision trees", category: "Machine Learning & AI" },
    { title: "Deep Learning", url: "machine_learning_ai/deep_learning.html", content: "neural networks deep learning backpropagation", category: "Machine Learning & AI" },
    { title: "Generative AI", url: "machine_learning_ai/generative_ai.html", content: "generative models gpt transformer large language models", category: "Machine Learning & AI" },
    { title: "Agentic AI", url: "machine_learning_ai/agentic_ai.html", content: "ai agents autonomous systems multi-agent systems", category: "Machine Learning & AI" },
    { title: "Resources", url: "machine_learning_ai/resources.html", content: "machine learning resources datasets tools libraries", category: "Machine Learning & AI" },
    { title: "Supervised Learning", url: "machine_learning_ai/supervised_learning.html", content: "supervised learning labeled data training examples", category: "Machine Learning & AI" },
    { title: "Unsupervised Learning", url: "machine_learning_ai/unsupervised_learning.html", content: "unsupervised learning clustering dimensionality reduction", category: "Machine Learning & AI" },
    { title: "Reinforcement Learning", url: "machine_learning_ai/reinforcement_learning.html", content: "reinforcement learning rewards agents environment", category: "Machine Learning & AI" },
    { title: "Neural Networks", url: "machine_learning_ai/neural_networks.html", content: "artificial neural networks perceptron multilayer networks", category: "Machine Learning & AI" },
    { title: "Computer Vision", url: "machine_learning_ai/computer_vision.html", content: "image processing object detection image recognition", category: "Machine Learning & AI" },
    { title: "Natural Language Processing", url: "machine_learning_ai/nlp.html", content: "nlp text processing language models sentiment analysis", category: "Machine Learning & AI" },
    { title: "Robotics", url: "machine_learning_ai/robotics.html", content: "robotics autonomous robots robot control systems", category: "Machine Learning & AI" },
    { title: "Expert Systems", url: "machine_learning_ai/expert_systems.html", content: "expert systems knowledge base inference engine", category: "Machine Learning & AI" },
    { title: "Fuzzy Logic", url: "machine_learning_ai/fuzzy_logic.html", content: "fuzzy logic fuzzy sets approximate reasoning", category: "Machine Learning & AI" },
    { title: "Genetic Algorithms", url: "machine_learning_ai/genetic_algorithms.html", content: "genetic algorithms evolutionary computation optimization", category: "Machine Learning & AI" },
    { title: "Swarm Intelligence", url: "machine_learning_ai/swarm_intelligence.html", content: "swarm intelligence particle swarm optimization ant colony", category: "Machine Learning & AI" },
    { title: "Quantum Machine Learning", url: "machine_learning_ai/quantum_ml.html", content: "quantum computing quantum algorithms quantum machine learning", category: "Machine Learning & AI" },
    { title: "Explainable AI", url: "machine_learning_ai/explainable_ai.html", content: "explainable ai interpretable machine learning model transparency", category: "Machine Learning & AI" },

    // Data Science
    { title: "Data Wrangling", url: "data_science/data_wrangling.html", content: "data cleaning data preprocessing data transformation", category: "Data Science" },
    { title: "Data Visualization", url: "data_science/data_visualization.html", content: "data visualization charts graphs plots dashboards", category: "Data Science" },
    { title: "Data Collection", url: "data_science/data_collection.html", content: "data collection surveys apis web scraping", category: "Data Science" },
    { title: "Data Cleaning", url: "data_science/data_cleaning.html", content: "data cleaning missing values outliers data quality", category: "Data Science" },
    { title: "Exploratory Data Analysis", url: "data_science/exploratory_analysis.html", content: "eda exploratory analysis statistical summaries", category: "Data Science" },
    { title: "Feature Engineering", url: "data_science/feature_engineering.html", content: "feature engineering feature selection feature extraction", category: "Data Science" },
    { title: "Big Data Technologies", url: "data_science/big_data.html", content: "big data hadoop spark distributed computing", category: "Data Science" },
    { title: "Database Management", url: "data_science/databases.html", content: "databases sql nosql database design", category: "Data Science" },
    { title: "Cloud Computing", url: "data_science/cloud_computing.html", content: "cloud computing aws azure google cloud", category: "Data Science" },
    { title: "Data Pipelines", url: "data_science/data_pipelines.html", content: "data pipelines etl workflows data engineering", category: "Data Science" },
    { title: "ETL Processes", url: "data_science/etl_processes.html", content: "extract transform load data processing", category: "Data Science" },
    { title: "Business Intelligence", url: "data_science/business_intelligence.html", content: "business intelligence reporting analytics dashboards", category: "Data Science" },
    { title: "Predictive Analytics", url: "data_science/predictive_analytics.html", content: "predictive analytics forecasting predictive modeling", category: "Data Science" },
    { title: "Data Storytelling", url: "data_science/data_storytelling.html", content: "data storytelling narrative visualization communication", category: "Data Science" },
    { title: "A/B Testing", url: "data_science/ab_testing.html", content: "ab testing statistical testing experimental design", category: "Data Science" },
    { title: "Data Ethics", url: "data_science/data_ethics.html", content: "data ethics privacy bias fairness", category: "Data Science" },
    { title: "Data Governance", url: "data_science/data_governance.html", content: "data governance data management data quality", category: "Data Science" },
    { title: "Web Scraping", url: "data_science/web_scraping.html", content: "web scraping data extraction automated collection", category: "Data Science" },
    { title: "API Integration", url: "data_science/apis.html", content: "api integration rest apis data integration", category: "Data Science" },
    { title: "Data Security", url: "data_science/data_security.html", content: "data security encryption data protection privacy", category: "Data Science" },

    // Main sections
    { title: "Mathematics", url: "mathematics/index.html", content: "mathematics mathematical foundations quantitative reasoning problem solving", category: "Mathematics" },
    { title: "Statistics", url: "statistics/index.html", content: "statistics statistical methods data analysis interpretation", category: "Statistics" },
    { title: "Machine Learning & AI", url: "machine_learning_ai/index.html", content: "machine learning artificial intelligence intelligent systems automated learning", category: "Machine Learning & AI" },
    { title: "Data Science", url: "data_science/index.html", content: "data science data analysis insights knowledge extraction datasets", category: "Data Science" },

    // Learning materials
    { title: "Learning Materials", url: "learning_materials.html", content: "learning materials educational resources guides handbooks", category: "Resources" },
    { title: "Research Materials", url: "research_materials.html", content: "research materials academic papers scholarly publications", category: "Resources" }
];

// Search functionality
function performSearch(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase().trim();
    
    if (term.length < 2) return results;
    
    searchIndex.forEach(item => {
        let score = 0;
        
        // Title match (highest priority)
        if (item.title.toLowerCase().includes(term)) {
            score += 10;
        }
        
        // Category match (high priority)
        if (item.category.toLowerCase().includes(term)) {
            score += 8;
        }
        
        // Content match (medium priority)
        if (item.content.toLowerCase().includes(term)) {
            score += 5;
        }
        
        // Exact word match in content (higher score)
        const words = item.content.toLowerCase().split(' ');
        if (words.includes(term)) {
            score += 3;
        }
        
        if (score > 0) {
            results.push({...item, score});
        }
    });
    
    // Sort by score (highest first)
    return results.sort((a, b) => b.score - a.score);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    // Remove any existing search results
    const existingResults = document.getElementById('search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    // Create search results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'search-results';
    resultsContainer.innerHTML = `
        <div class="search-results-overlay" onclick="closeSearchResults()">
            <div class="search-results-modal" onclick="event.stopPropagation()">
                <div class="search-results-header">
                    <h3>Search Results for "${searchTerm}"</h3>
                    <button class="close-search" onclick="closeSearchResults()">&times;</button>
                </div>
                <div class="search-results-content">
                    ${results.length > 0 ? 
                        results.map(result => `
                            <div class="search-result-item" onclick="navigateToResult('${result.url}')">
                                <div class="result-title">${result.title}</div>
                                <div class="result-category">${result.category}</div>
                                <div class="result-url">${result.url}</div>
                            </div>
                        `).join('') : 
                        '<div class="no-results">No results found for your search.</div>'
                    }
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(resultsContainer);
}

// Navigate to search result
function navigateToResult(url) {
    window.location.href = url;
}

// Close search results
function closeSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
        resultsContainer.remove();
    }
}

// Event listeners
document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search-bar').value.trim();
    if (searchTerm) {
        const results = performSearch(searchTerm);
        displaySearchResults(results, searchTerm);
    }
});

// Allow search on Enter key
document.getElementById('search-bar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm) {
            const results = performSearch(searchTerm);
            displaySearchResults(results, searchTerm);
        }
    }
});

// Close search results when clicking outside
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSearchResults();
    }
});
