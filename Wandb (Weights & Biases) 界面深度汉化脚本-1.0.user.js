// ==UserScript==
// @name         Wandb (Weights & Biases) 界面深度汉化脚本
// @name:zh-CN   Wandb (Weights & Biases) 界面深度汉化脚本
// @name:en      Wandb UI Deep Translation Script
// @namespace    https://github.com/windycn
// @version      1.0
// @description  将 Weights & Biases (wandb.ai) 的 UI 界面汉化为中文，翻译字典可自定义。
// @description:en Translates the Weights & Biases UI into Chinese while preserving machine learning technical terms.
// @author       Ye Xiao（叶筱）
// @homepage     https://github.com/windycn/MyTampermonkey
// @match        *://wandb.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wandb.ai
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // ===========
    // 翻译字典
    // ===========
    const translations = {
        // ==========================================
        // 1. 全局导航 & 通用 (Global & Common)
        // ==========================================
        "Home": "主页",
        "Projects": "项目",
        "Project": "项目",
        "Reports": "报告",
        "New report": "新建报告",
        "Settings": "设置",
        "Workspace": "工作区",
        "Search": "搜索",
        "Overview": "概览",
        "Details": "详情",
        "Description": "描述",
        "Sweeps": "参数搜索",
        "Sweep": "参数搜索",
        "New sweep": "新建参数搜索",
        "Runs": "运行记录",
        "Artifacts": "制品",
        "Using Artifact": "使用制品",
        "Outputting Artifact": "输出制品",
        "Files": "文件",
        "Logs": "日志",
        "Automations": "自动化",
        "Automat.": "自动化",
        "Jobs": "工作",
        "Job Type": "任务类型",
        "JOB TYPE": "任务类型",
        "Save": "保存",
        "Saved just now": "刚刚保存",
        "Cancel": "取消",
        "Apply": "应用",
        "Close": "关闭",
        "Action": "操作",
        "Edit": "编辑",
        "Delete": "删除",
        "Loading project...": "正在加载项目...",

        // ==========================================
        // 2. 主页 & 项目列表 (Home & Projects)
        // ==========================================
        "Create project": "创建项目",
        "Pinned Projects": "置顶项目",
        "My Projects": "我的项目",
        "Search projects...": "搜索项目...",
        "Type": "类型",
        "Name": "名称",
        "Visibility": "可见性",
        "Project visibility": "项目可见性",
        "Contributors": "贡献者",
        "Project Roles": "项目角色",
        "Total compute": "总算力",
        "Last run": "最后运行",
        "Total runs": "总运行数",
        "Created": "创建时间",
        "Last updated": "最后更新",
        "Last active": "最后活跃",

        // ==========================================
        // 3. 运行列表 & 表格筛选 (Runs Table & Filters)
        // ==========================================
        "Search runs...": "搜索运行记录...",
        "Search runs": "搜索运行记录",
        "Filter": "筛选",
        "New filter": "新建筛选器",
        "Show only my work": "仅显示我的工作",
        "Hide crashed runs": "隐藏崩溃的运行",
        "Group": "分组",
        "Group by": "分组依据",
        "Sort": "排序",
        "Sort by": "排序依据",
        "Columns": "列",
        "Show, hide, or pin columns": "显示、隐藏或固定列",
        "Show most useful columns": "显示最常用的列",
        "Make all visible": "全部设为可见",
        "Make all hidden": "全部设为隐藏",
        "Hidden": "隐藏",
        "Tags": "标签",
        "Notes": "备注",
        "State": "状态",
        "Runtime": "运行时长",
        "User": "用户",
        "Host": "主机",
        "Hostname": "主机名",
        "HOSTNAME": "主机名",
        "Active": "活跃",
        "Finished": "已完成",
        "Failed": "失败",
        "Crashed": "崩溃",
        "Select visible runs": "选择可见的运行",
        "visualized": "已可视化",
        "Only show visualized": "仅显示已可视化的",
        "Only show visualized shortcut": "仅显示已可视化快捷键",
        "Show value deltas in the runs table": "在运行表格中显示差值",
        "Expand full table": "展开完整表格",
        "Column header copied to clipboard": "列标题已复制到剪贴板",
        "Created Timestamp": "创建时间戳",
        "Updated Timestamp": "更新时间戳",
        "UPDATED": "已更新",
        "END TIME": "结束时间",
        "Commit": "代码提交",
        "COMMIT": "代码提交",
        "DESCRIPTION": "描述",
        "GPU COUNT": "GPU 数量",
        "GPU Count": "GPU 数量",
        "GPU TYPE": "GPU 类型",
        "GPU Type": "GPU 类型",

        // ==========================================
        // 4. 工作区与视图管理 (Workspace Management)
        // ==========================================
        "workspace": "工作区",
        "Workspace settings": "工作区设置",
        "WORKSPACE SETTINGS": "工作区设置",
        "Gathering workspace settings...": "正在获取工作区设置...",
        "Workspace layout": "工作区布局",
        "Automated workspace": "自动化工作区",
        "Customize run display in this workspace.": "自定义此工作区中的运行显示。",
        "Define the overall structure of this workspace, including sectioning logic and panel organization.": "定义此工作区的整体结构，包括区块逻辑和面板组织。",
        "Copy workspace URL": "复制工作区链接",
        "Save as new view": "另存为新视图",
        "Save personal workspace template": "保存个人工作区模板",
        "Reset workspace": "重置工作区",
        "Hide sidebar": "隐藏侧边栏",

        // ==========================================
        // 5. 区块与面板操作 (Sections & Panel Actions)
        // ==========================================
        "Add section": "添加区块",
        "Section settings": "区块设置",
        "Section organization": "区块组织",
        "Pin section": "固定区块",
        "Rename section": "重命名区块",
        "New section above": "在上方新建区块",
        "New section below": "在下方新建区块",
        "Add section to report": "将区块添加到报告",
        "Delete section": "删除区块",
        "Expand all sections": "展开所有区块",
        "Collapse all sections": "折叠所有区块",
        "Hide empty sections during search": "搜索时隐藏空区块",
        "Add panel": "添加面板",
        "Add panels": "添加面板",
        "Edit panel": "编辑面板",
        "Delete panel": "删除面板",
        "Duplicate panel": "复制面板",
        "Move panel": "移动面板",
        "Sort panels alphabetically": "按字母顺序排序面板",
        "Sort panels A-Z": "按 A-Z 排序面板",
        "Search panels with regex": "使用正则表达式搜索面板",
        "Compare runs": "对比运行",

        // ==========================================
        // 6. 图表与数据设置 (Charts & Data Settings)
        // ==========================================
        "Line Plot": "折线图",
        "Line plots": "折线图",
        "Bar Chart": "柱状图",
        "Scatter Plot": "散点图",
        "Display": "显示",
        "Display preferences": "显示偏好",
        "Viewer settings": "查看器设置",
        "Data": "数据",
        "Metrics": "指标",
        "X-Axis": "X轴",
        "Y-Axis": "Y轴",
        "Min": "最小值",
        "Max": "最大值",
        "Log scale": "对数刻度",
        "Log Scale": "对数刻度",
        "Smoothing": "平滑处理",
        "No smoothing": "无平滑",
        "Time weighted EMA": "时间加权指数移动平均 (EMA)",
        "Running average": "滑动平均",
        "Gaussian": "高斯",
        "Exponential moving average": "指数移动平均 (EMA)",
        "Outliers": "异常值",
        "Ignore outliers": "忽略异常值",
        "Ignore Outliers": "忽略异常值",
        "Exclude extreme outliers when scaling charts": "缩放图表时排除极端异常值",
        "Only applies to lines with more than 1,000 data points.": "仅适用于超过1,000个数据点的折线。",
        "Grouping": "分组",
        "Legend": "图例",
        "Legend template": "图例模板",
        "Display legends in all panels": "在所有面板中显示图例",
        "Display colored run names": "显示彩色运行名称",
        "Title": "标题",
        "Subtitle": "副标题",
        "Tooltip": "提示框",
        "Show bin range in tooltip": "在提示框中显示分箱范围",
        "Only show highlighted run in companion chart tooltips": "仅在关联图表提示框中显示高亮的运行",
        "Number of runs shown in tooltips": "提示框中显示的运行数量",
        "Display full run names on the primary chart tooltip": "在主图表提示框中显示完整运行名称",
        "Single run": "单次运行",
        "Default": "默认",
        "All runs": "所有运行",
        "Colors": "颜色",
        "Line style": "线条样式",
        "Expressions": "表达式",
        "Advanced": "高级配置",
        "Point aggregation method": "数据点聚合方法",
        "Max number of runs or groups": "最大运行或分组数量",
        "Use grouping from the runs table in charts": "在图表中使用运行表格的分组",
        "Aggregation": "聚合",
        "Mean": "平均值",
        "Range": "范围",
        "Random sampling": "随机采样",
        "Full fidelity": "全保真",
        "Apply settings to all line plots in this section.": "将设置应用于此区块中的所有折线图。",
        "Apply settings to all line plots in this workspace.": "将设置应用于此工作区中的所有折线图。",
        "Zooming": "缩放",
        "Synchronize zooming across line plots with a matching x-axis key": "跨具有相同 X 轴键的折线图同步缩放",
        "No data available. Please select runs that logged the key": "暂无数据。请选择已记录该键的运行记录",

        // ==========================================
        // 7. 媒体面板设置 (Media Panel)
        // ==========================================
        "Media panel": "媒体面板",
        "Media": "媒体",
        "Set global defaults for images, videos, audio and point clouds in this section.": "为此区块中的图像、视频、音频和点云设置全局默认值。",
        "Set global defaults for images, videos, audio and point clouds in this workspace.": "为此工作区中的图像、视频、音频和点云设置全局默认值。",
        "Smooth image": "平滑图像",
        "Snap to step": "对齐到步数",
        "Stride length": "步幅长度",
        "Appearance": "外观",
        "Improve visibility of image": "提高图像可见性",
        "Align media display with a specific run for comparison": "将媒体显示与特定运行对齐以进行比较",
        "Navigation & playback": "导航与播放",
        "Layout": "布局",
        "Sync": "同步",
        "Grid & organization": "网格与组织",
        "Fit & alignment": "自适应与对齐",
        "Use original size": "使用原始尺寸",
        "Fit to available space": "适应可用空间",
        "Column content": "列内容",
        "Number of columns": "列数",
        "Log Step": "日志步数",
        "Example Index": "示例索引",
        "Run": "运行记录",
        "Max runs to include": "包含的最大运行数",
        "Media display limit": "媒体显示限制",
        "Show all": "显示全部",
        "Limit media": "限制媒体",
        "Panel mode": "面板模式",
        "Gallery": "画廊模式",
        "Grid": "网格模式",
        "Slider key": "滑块键",
        "Sync slider by key (Step)": "按键值(Step)同步滑块",
        "Slider sync": "滑块同步",
        "Adjusting one slider updates others in this workspace using the same key (Step)": "调整一个滑块会更新该工作区中使用相同键(Step)的其他滑块",
        "Adjusting one slider updates others in this section using the same key (Step)": "调整一个滑块会更新此区块中使用相同键(Step)的其他滑块",

        // ==========================================
        // 8. 账户与设置页面 (Settings & Profile)
        // ==========================================
        "Account Settings": "账户设置",
        "Profile": "个人资料",
        "Email": "电子邮箱",
        "Password": "密码",
        "API keys": "API 密钥",
        "Danger Zone": "危险区域",
        "Delete Account": "删除账户",
        "Save changes": "保存更改",
        "You can share personal workspaces and saved views with colleagues by copying their URL in the address bar.": "您可以通过复制地址栏中的 URL 与同事共享个人工作区和保存的视图。",

        // ==========================================
        // 9. 专业词汇 & 不翻译项 (保留英文)
        // ==========================================
        // "Weights & Biases": "Weights & Biases",
        // "Epoch": "Epoch",
        // "Loss": "Loss",
        // "Accuracy": "Accuracy",
        // "batch_size": "batch_size",
        // "Step": "步数",
        // "Relative Time": "相对时间",
        // "Wall Time": "绝对时间",
    };

    // 避免替换导致问题的 HTML 标签（如图表内部的 canvas、代码块等）
    const excludeTags = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'CANVAS', 'SVG', 'CODE', 'PRE']);

    // 翻译文本节点的函数
    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;
            let trimmedText = text.trim();

            // 精确匹配字典，避免误伤动态生成的数据或代码
            if (trimmedText && translations[trimmedText]) {
                node.nodeValue = text.replace(trimmedText, translations[trimmedText]);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // 如果是需要跳过的标签，或者是特定的富文本编辑器容器，则跳过
            if (excludeTags.has(node.nodeName) ||
                node.isContentEditable ||
                (node.className && typeof node.className === 'string' && node.className.includes('monaco-editor'))) {
                return;
            }
            // 递归遍历子节点
            for (let child of node.childNodes) {
                translateNode(child);
            }
        }
    }

    // 初始执行一次翻译
    translateNode(document.body);

    // 使用 MutationObserver 监听 DOM 树的变化，对新加入的节点进行翻译
    const observer = new MutationObserver(function(mutations) {
        let shouldTranslate = false;

        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    translateNode(node);
                });
            }
            // 处理文本节点直接被修改的情况 (例如 React 更新文本)
            if (mutation.type === 'characterData') {
                let text = mutation.target.nodeValue;
                let trimmedText = text.trim();
                if (trimmedText && translations[trimmedText]) {
                    // 暂停监听以防止死循环
                    observer.disconnect();
                    mutation.target.nodeValue = text.replace(trimmedText, translations[trimmedText]);
                    startObserving();
                }
            }
        });
    });

    function startObserving() {
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    // 启动监听
    startObserving();

})();
