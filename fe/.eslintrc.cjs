module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  "settings": {
    "import/resolver": {
      "typescript": true,
      "node": {
        "paths": ["src"],
        "extensions": [".mjs", ".js", ".json"]
      }
    },
    "import/extensions": [
      ".js",
      ".mjs",
      ".jsx"
    ],
    "import/core-modules": [
    ],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint",
    "react-refresh",
    "import"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    //react
    'react/jsx-boolean-value': ['error', 'never', { 'always': [] }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', 'never', { 'allowMultiline': true }],
    'react/jsx-handler-names': ['off', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on'
    }],
    'react/display-name': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'off',
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'multiline' }],
    'react/jsx-no-duplicate-props': ['error', { 'ignoreCase': true }],
    'react/jsx-no-literals': ['off', { 'noStrings': true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', {
      'allowAllCaps': true,
      'ignore': []
    }],
    'react/jsx-sort-props': ['off', {
      'ignoreCase': true,
      'callbacksLast': false,
      'shorthandFirst': false,
      'shorthandLast': false,
      'noSortAlphabetically': false,
      'reservedFirst': true
    }],
    'react/no-danger': 'warn',
    'react/self-closing-comp': 'error',

    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-target-blank': ['error', { 'enforceDynamicLinks': 'always' }],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.jsx,', '.tsx'] }],
    'react/style-prop-object': 'error',
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never'
    }],
    'react/no-array-index-key': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-curly-brace-presence': ['error', { 'props': 'never', 'children': 'never' }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-curly-newline': ['error', {
      'multiline': 'consistent',
      'singleline': 'consistent'
    }],
    'react/jsx-no-script-url': ['error', [
      {
        'name': 'Link',
        'props': ['to']
      }
    ]],
    'react/jsx-no-useless-fragment': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-namespace': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // jsx-a11y
    'jsx-a11y/alt-text': ['error', {
      'elements': ['img', 'object', 'area', 'input[type=\'image\']'],
      'img': [],
      'object': [],
      'area': [],
      'input[type=\'image\']': []
    }],

    'jsx-a11y/anchor-has-content': ['error', { 'components': [] }],
    'jsx-a11y/anchor-is-valid': ['error', {
      'components': ['Link'],
      'specialLink': ['to'],
      'aspects': ['noHref', 'invalidHref', 'preferButton']
    }],

    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', { 'ignoreNonDOM': false }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/control-has-associated-label': ['error', {
      'labelAttributes': ['label'],
      'controlComponents': [],
      'ignoreElements': [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video'
      ],
      'ignoreRoles': [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid'
      ],
      'depth': 5
    }],
    'jsx-a11y/heading-has-content': ['error', { 'components': [''] }],
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': ['error', {
      'labelComponents': [],
      'labelAttributes': [],
      'controlComponents': [],
      'assert': 'both',
      'depth': 25
    }],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': ['error', {
      'audio': [],
      'video': [],
      'track': []
    }],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': ['error', { 'ignoreNonDOM': true }],
    'jsx-a11y/no-distracting-elements': ['error', {
      'elements': ['marquee', 'blink']
    }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
      'tr': ['none', 'presentation']
    }],
    'jsx-a11y/no-noninteractive-element-interactions': ['error', {
      'handlers': [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp'
      ]
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
      'ul': ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      'ol': ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      'li': ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      'table': ['grid'],
      'td': ['gridcell']
    }],
    'jsx-a11y/no-noninteractive-tabindex': ['error', {
      'tags': [],
      'roles': ['tabpanel']
    }],
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': ['error', {
      'handlers': [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp'
      ]
    }],
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',

    // style
    'array-bracket-newline': ['off', 'consistent'],
    'array-element-newline': ['off', { 'multiline': true, 'minItems': 3 }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': ['error', { 'properties': 'never', 'ignoreDestructuring': false }],
    'capitalized-comments': ['off', 'never', {
      'line': {
        'ignorePattern': '.*',
        'ignoreInlineComments': true,
        'ignoreConsecutiveComments': true
      },
      'block': {
        'ignorePattern': '.*',
        'ignoreInlineComments': true,
        'ignoreConsecutiveComments': true
      }
    }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline'
    }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last', {
      'exceptions': {
        'ArrayExpression': false,
        'ArrayPattern': false,
        'ArrowFunctionExpression': false,
        'CallExpression': false,
        'FunctionDeclaration': false,
        'FunctionExpression': false,
        'ImportDeclaration': false,
        'ObjectExpression': false,
        'ObjectPattern': false,
        'VariableDeclaration': false,
        'NewExpression': false
      }
    }],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'function-call-argument-newline': ['error', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off', 'always', {
      'includeCommonJSModuleExports': false,
      'considerPropertyDescriptor': true
    }],
    'func-names': 'warn',
    'func-style': ['off', 'expression'],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': 1,
      'outerIIFEBody': 1,
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1
      },
      'CallExpression': {
        'arguments': 1
      },
      'ArrayExpression': 1,
      'ObjectExpression': 1,
      'ImportDeclaration': 1,
      'flatTernaryExpressions': false,
      'ignoredNodes': ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      'ignoreComments': false
    }],
    'jsx-quotes': ['off', 'prefer-double'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true }
      }
    }],
    'line-comment-position': ['off', {
      'position': 'above',
      'ignorePattern': '',
      'applyDefaultPatterns': true
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': false }],
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', {
      'before': 'always',
      'after': 'always'
    }],
    'logical-assignment-operators': ['off', 'always', {
      'enforceForIfStatements': true
    }],
    'max-depth': ['off', 4],
    'max-len': ['error', 100, 2, {
      'ignoreUrls': true,
      'ignoreComments': false,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'max-lines': ['off', {
      'max': 300,
      'skipBlankLines': true,
      'skipComments': true
    }],
    'max-lines-per-function': ['off', {
      'max': 50,
      'skipBlankLines': true,
      'skipComments': true,
      'IIFEs': true
    }],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': ['off', { 'max': 1 }],
    'multiline-comment-style': ['off', 'starred-block'],
    'multiline-ternary': ['off', 'never'],
    'new-cap': ['error', {
      'newIsCap': true,
      'newIsCapExceptions': [],
      'capIsNew': false,
      'capIsNewExceptions': ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
    }],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': ['error', {
      'groups': [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||']
      ],
      'allowSamePrecedence': false
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'ForInStatement',
        'message': 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        'selector': 'ForOfStatement',
        'message': 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      },
      {
        'selector': 'LabeledStatement',
        'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        'selector': 'WithStatement',
        'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-spaced-func': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': ['error', {
      'skipBlankLines': false,
      'ignoreComments': false
    }],
    'no-underscore-dangle': ['error', {
      'allow': [],
      'allowAfterThis': false,
      'allowAfterSuper': false,
      'enforceInMethodNames': true
    }],
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside', { 'overrides': {} }],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      'ObjectExpression': { 'minProperties': 4, 'multiline': true, 'consistent': true },
      'ObjectPattern': { 'minProperties': 4, 'multiline': true, 'consistent': true },
      'ImportDeclaration': { 'minProperties': 4, 'multiline': true, 'consistent': true },
      'ExportDeclaration': { 'minProperties': 4, 'multiline': true, 'consistent': true }
    }],
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': true
    }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'none' } }],
    'padded-blocks': ['error', {
      'blocks': 'never',
      'classes': 'never',
      'switches': 'never'
    }, {
      'allowSingleLineBlocks': true
    }],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed', { 'keywords': false, 'unnecessary': true, 'numbers': false }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'require-jsdoc': 'off',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { 'before': false, 'after': true }],
    'semi-style': ['error', 'last'],
    'sort-keys': ['off', 'asc', { 'caseSensitive': false, 'natural': true }],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false,
      'overrides': {
      }
    }],
    'spaced-comment': ['error', 'always', {
      'line': {
        'exceptions': ['-', '+'],
        'markers': ['=', '!', '/']
      },
      'block': {
        'exceptions': ['-', '+'],
        'markers': ['=', '!', ':', '::'],
        'balanced': true
      }
    }],
    'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off',

    //best-practices
    'accessor-pairs': 'off',
    'array-callback-return': ['error', { 'allowImplicit': true }],
    'block-scoped-var': 'error',
    'complexity': ['off', 20],
    'class-methods-use-this': ['error', {
      'exceptMethods': []
    }],
    'consistent-return': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': ['error', { 'commentPattern': '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { 'allowKeywords': true }],
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'off',
    'no-else-return': ['error', { 'allowElseIf': false }],
    'no-empty-function': ['error', {
      'allow': [
        'arrowFunctions',
        'functions',
        'methods'
      ],
    }],
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { 'exceptions': [] }],
    'no-native-reassign': 'off',
    'no-implicit-coercion': ['off', {
      'boolean': false,
      'number': true,
      'string': true,
      'allow': []
    }],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': ['error', { 'allowLoop': false, 'allowSwitch': false }],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['off', {
      'ignore': [],
      'ignoreArrayIndexes': true,
      'enforceConst': true,
      'detectObjects': false
    }],
    'no-multi-spaces': ['error', {
      'ignoreEOLComments': false
    }],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
        '$scope',
        'staticContext',
        'config'
      ]
    }],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': ['error', {
      'object': 'arguments',
      'property': 'callee',
      'message': 'arguments.callee is deprecated'
    }, {
      'object': 'global',
      'property': 'isFinite',
      'message': 'Please use Number.isFinite instead'
    }, {
      'object': 'self',
      'property': 'isFinite',
      'message': 'Please use Number.isFinite instead'
    }, {
      'object': 'window',
      'property': 'isFinite',
      'message': 'Please use Number.isFinite instead'
    }, {
      'object': 'global',
      'property': 'isNaN',
      'message': 'Please use Number.isNaN instead'
    }, {
      'object': 'self',
      'property': 'isNaN',
      'message': 'Please use Number.isNaN instead'
    }, {
      'object': 'window',
      'property': 'isNaN',
      'message': 'Please use Number.isNaN instead'
    }, {
      'property': '__defineGetter__',
      'message': 'Please use Object.defineProperty instead.'
    }, {
      'property': '__defineSetter__',
      'message': 'Please use Object.defineProperty instead.'
    }, {
      'object': 'Math',
      'property': 'pow',
      'message': 'Use the exponentiation operator (**) instead.'
    }],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['error', {
      'props': true
    }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': ['error', {
      'allowShortCircuit': false,
      'allowTernary': false,
      'allowTaggedTemplates': false
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': ['off', { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', { 'allowEmptyReject': true }],
    'prefer-named-capture-group': 'off',
    'prefer-object-has-own': 'off',
    'prefer-regex-literals': ['error', {
      'disallowRedundantWrapping': true
    }],
    'radix': 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside', { 'functionPrototypeMethods': false }],
    'yoda': 'error',

    // errors
    'for-direction': 'error',
    'getter-return': ['error', { 'allowImplicit': true }],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-constant-binary-expression': 'off',
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': ['error', {'allowEmptyCatch': true}],
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['off', 'all', {
      'conditionalAssign': true,
      'nestedBinaryExpressions': false,
      'returnAssign': false,
      'ignoreJSX': 'all',
      'enforceForArrowConditionals': false
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-new-native-nonconstructor': 'off',
    // 'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': ['error', {
      'ignore': []
    }],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': ['error', { 'disallowArithmeticOperators': true }],
    'no-unused-private-class-members': 'off',
    'no-useless-backreference': 'error',
    'no-negated-in-lhs': 'off',
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', { 'requireStringLiterals': true }],

    // es6
    'arrow-body-style': ['error', 'as-needed', {
      'requireReturnForObjectLiteral': false
    }],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', { 'before': false, 'after': true }],
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      'allowParens': true
    }],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    'no-new-symbol': 'error',
    'no-restricted-exports': ['error', {
      'restrictedNamedExports': [
        'default',
        'then'
      ]
    }],
    'no-restricted-imports': ['off', {
      'paths': [],
      'patterns': []
    }],
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': ['error', {
      'ignoreDestructuring': false,
      'ignoreImport': false,
      'ignoreExport': false
    }],
    'no-var': 'error',
    'object-shorthand': ['error', 'always', {
      'ignoreConstructors': false,
      'avoidQuotes': true
    }],
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': true
    }],
    'prefer-destructuring': ['error', {
      'VariableDeclarator': {
        'array': false,
        'object': true
      },
      'AssignmentExpression': {
        'array': true,
        'object': false
      }
    }, {
      'enforceForRenamedProperties': false
    }],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['off', {
      'ignoreCase': false,
      'ignoreDeclarationSort': false,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'after'],

    // imports
    'import/no-unresolved': ['error', { 'commonjs': true, 'caseSensitive': true }],
    'import/named': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx}',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/vue.config.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        '**/gulpfile.js',
        '**/gulpfile.*.js',
        '**/Gruntfile{,.js}',
        '**/protractor.conf.js',
        '**/protractor.conf.*.js',
        '**/karma.conf.js',
        '**/.eslintrc.json'
      ],
      'optionalDependencies': false
    }],
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/imports-first': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      'js': 'never',
      'mjs': 'never',
      'jsx': 'never',
      'ts': 'never',
      'tsx': 'never'
    }],
    'import/order': ['error', { 'groups': [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
    // 'import/prefer-default-export': 'error',
    'import/no-restricted-paths': 'off',
    'import/max-dependencies': ['off', { 'max': 10 }],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': ['off', {
      'allow': []
    }],
    'import/unambiguous': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': ['off', {
      'allowArray': false,
      'allowArrowFunction': false,
      'allowAnonymousClass': false,
      'allowAnonymousFunction': false,
      'allowLiteral': false,
      'allowObject': false
    }],
    'import/exports-last': 'off',
    'import/group-exports': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { 'maxDepth': '∞' }],
    'import/no-useless-path-segments': ['error', { 'commonjs': true }],
    'import/dynamic-import-chunkname': ['off', {
      'importFunctions': [],
      'webpackChunknameFormat': '[0-9a-zA-Z-_/.]+'
    }],
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': ['off', {
      'ignoreExports': [],
      'missingExports': true,
      'unusedExports': true
    }],
    'import/no-import-module-exports': ['error', {
      'exceptions': []
    }],
    'import/no-relative-packages': 'error',
    'import/consistent-type-specifier-style': ['off', 'prefer-inline'],
    'import/no-empty-named-blocks': 'off',

    // node
    'callback-return': 'off',
    'global-require': 'error',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['off', false],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // strict
    'strict': ['error', 'never'],

    // variables
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-use-before-define': ['error', { 'functions': true, 'classes': true, 'variables': true }],
    '@typescript-eslint/no-unused-vars': 'warn'
  },
}
