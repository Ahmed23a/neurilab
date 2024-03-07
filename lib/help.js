function getNodePaths(tree, currentPath = []) {
    if (!tree) {
        return [];
    }

    // Add the current node to the path
    const newPath = [...currentPath, { id: tree._id, value: tree.title }];

    // If the node has no children, return the path
    if (!tree.children || tree.children.length === 0) {
        return [newPath];
    }

    // Recursively get paths for each child
    const childPaths = tree.children.reduce((acc, child) => {
        return acc.concat(getNodePaths(child, newPath));
    }, []);

    return [newPath, ...childPaths];
}

// Get paths for each node in the tree

// Display the paths



export function getRoutersID(tree) {
    const paths = getNodePaths(tree);
    let x = {}
    const IFS = paths.map((path, index) => {
        const lastNode = path[path.length - 1];
        const formattedPath = path.map(node => `${node.value.replace(/ /g, '_').replace(/\?/g, "%3F")}`).join('/');
        let obj = {};
        x[`${formattedPath}`] = lastNode.id;
        return (obj)
    });

    return x
}