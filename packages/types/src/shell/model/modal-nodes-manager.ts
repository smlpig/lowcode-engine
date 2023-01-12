import { IPublicModelNode } from './';

export interface IPublicModelModalNodesManager {

  /**
   * 设置模态节点，触发内部事件
   * set modal nodes, trigger internal events
   */
  setNodes(): void;

  /**
   * 获取模态节点（们）
   * get modal nodes
   */
  getModalNodes(): IPublicModelNode[];

  /**
   * 获取当前可见的模态节点
   * get current visible modal node
   */
  getVisibleModalNode(): IPublicModelNode | null;

  /**
   * 隐藏模态节点（们）
   * hide modal nodes
   */
  hideModalNodes(): void;

  /**
   * 设置指定节点为可见态
   * set specfic model node as visible
   * @param node Node
   */
  setVisible(node: IPublicModelNode): void;

  /**
   * 设置指定节点为不可见态
   * set specfic model node as invisible
   * @param node Node
   */
  setInvisible(node: IPublicModelNode): void;
}
